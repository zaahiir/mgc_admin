import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  SpinnerComponent,
  TableDirective,
  BadgeComponent
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import {
  cilCalendar, cilChartLine, cilClock, cilPeople, cilReload, cilEnvelopeClosed, cilLocationPin
} from '@coreui/icons';

import { DashboardService, DashboardStats } from '../common-service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RowComponent, ColComponent, CardComponent,
    CardBodyComponent, CardHeaderComponent, ButtonDirective, IconDirective,
    SpinnerComponent, TableDirective, BadgeComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {

  icons = { cilCalendar, cilChartLine, cilClock, cilPeople, cilReload, cilEnvelopeClosed, cilLocationPin };

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
      case 'confirmed': return 'success';
      case 'approved': return 'info';
      case 'pending':
      case 'pending_approval': return 'warning';
      case 'completed': return 'primary';
      default: return 'secondary';
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
