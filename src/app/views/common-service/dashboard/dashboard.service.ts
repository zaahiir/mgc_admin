import { Injectable } from '@angular/core';
import { BaseAPIUrl, baseURLType } from '../commom-api-url';
import axios from 'axios';

export interface DashboardStats {
  generatedAt: string;
  members: { total: number; newThisMonth: number };
  bookings: { today: number; upcoming: number; thisMonth: number; total: number };
  joinRequests: { pending: number };
  courses: { active: number; tees: number };
  enquiries: { contact: number; member: number };
  recentBookings: {
    bookingId: string;
    memberName: string;
    courseName: string;
    teeInfo: string;
    slotDate: string | null;
    bookingTime: string | null;
    participants: number;
    status: string;
  }[];
  bookingsTrend: { date: string; label: string; count: number }[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private statsUrl: string;

  constructor() {
    this.statsUrl = new BaseAPIUrl().getUrl(baseURLType) + 'dashboard/stats/';
  }

  getStats() {
    return axios.get(this.statsUrl);
  }
}
