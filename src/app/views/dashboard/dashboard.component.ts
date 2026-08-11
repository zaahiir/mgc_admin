import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DashboardService, DashboardStats } from '../common-service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {

  /** How often the figures refresh themselves, in milliseconds. */
  private static readonly REFRESH_MS = 30000;

  stats: DashboardStats | null = null;
  isLoading = true;
  isRefreshing = false;
  errorMessage = '';
  lastUpdated: Date | null = null;

  private timerId: ReturnType<typeof setInterval> | null = null;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadStats();
    this.timerId = setInterval(() => this.loadStats(true), DashboardComponent.REFRESH_MS);
  }

  ngOnDestroy(): void {
    // Leaving the page must stop the polling, or it runs for the whole session
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  async loadStats(isBackground = false): Promise<void> {
    if (isBackground) {
      this.isRefreshing = true;
    }

    try {
      const response = await this.dashboardService.getStats();
      if (response?.data?.code === 1) {
        this.stats = response.data.data;
        this.lastUpdated = new Date();
        this.errorMessage = '';
      } else {
        this.errorMessage = response?.data?.message || 'Failed to load dashboard stats';
      }
    } catch (error) {
      console.error('Error loading dashboard stats:', error);
      this.errorMessage = 'Could not reach the server. Figures may be out of date.';
    } finally {
      this.isLoading = false;
      this.isRefreshing = false;
    }
  }

  /** Tallest bar in the 7-day trend, used to scale the others. */
  get trendPeak(): number {
    if (!this.stats?.bookingsTrend?.length) return 0;
    return Math.max(...this.stats.bookingsTrend.map(d => d.count));
  }

  barHeight(count: number): string {
    const peak = this.trendPeak;
    if (!peak) return '2px';
    return `${Math.max((count / peak) * 100, 2)}%`;
  }

  statusColor(status: string): string {
    switch ((status || '').toLowerCase()) {
      case 'confirmed': return 'text-bg-success';
      case 'approved': return 'text-bg-info';
      case 'pending':
      case 'pending_approval': return 'text-bg-warning';
      case 'completed': return 'text-bg-primary';
      default: return 'text-bg-secondary';
    }
  }

  formatSlot(date: string | null, time: string | null): string {
    if (!date) return 'Date not set';
    const formatted = new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: '2-digit'
    });
    return time ? `${formatted}, ${time}` : formatted;
  }
}
