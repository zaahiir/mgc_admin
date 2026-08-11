import { Component, OnInit, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { NgClass, NgStyle, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { BookingService } from '../../common-service/booking/booking.service';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';

type BookingView = 'all' | 'bookings' | 'approved' | 'pending' | 'expired';

interface BookingStatistics {
  totalBookings: number;
  confirmedBookings: number;
  pendingRequests: number;
  approvedRequests: number;
  rejectedRequests: number;
  cancelledBookings: number;
  todaysBookings: number;
  activeCourses: number;
}

interface BookingFilters {
  status?: string;
  course?: number;
  tee?: number;
  dateFrom?: string;
  dateTo?: string;
  member?: string;
  bookingId?: string;
  participants?: number;
  page?: number;
  pageSize?: number;
}

interface BookingDetail {
  id: number;
  booking_id: string;
  type: 'BOOKING' | 'REQUEST';
  member: any;
  bookedDate: string;
  course: any;
  tee: any;
  slotDate: string;
  slotTime: string;
  participants: number;
  status: string;
  details?: any;
}

@Component({
  selector: 'app-list-booking',
  standalone: true,
  imports: [
    NgClass, CommonModule, RouterLink, ReactiveFormsModule, FormsModule, NgStyle
  ],
  templateUrl: './list-booking.component.html',
  styleUrl: './list-booking.component.scss'
})
export class ListBookingComponent implements OnInit, OnDestroy {
  @ViewChild('detailsModal') detailsModal!: TemplateRef<any>;
  
  private destroy$ = new Subject<void>();
  private searchSubject = new Subject<string>();
  
  // Loading states
  isLoading = false;
  isLoadingStats = false;
  isExporting = false;
  
  // View toggle
  currentView: BookingView = 'all';

  // Tab definitions - label/colour live here so the template stays a simple loop
  readonly views: { value: BookingView; label: string; color: string }[] = [
    { value: 'all', label: 'All Records', color: 'primary' },
    { value: 'bookings', label: 'Bookings', color: 'success' },
    { value: 'approved', label: 'Approved', color: 'info' },
    { value: 'pending', label: 'Pending', color: 'warning' },
    { value: 'expired', label: 'Expired', color: 'secondary' }
  ];
  
  // Statistics
  statistics: BookingStatistics = {
    totalBookings: 0,
    confirmedBookings: 0,
    pendingRequests: 0,
    approvedRequests: 0,
    rejectedRequests: 0,
    cancelledBookings: 0,
    todaysBookings: 0,
    activeCourses: 0
  };
  
  // Data
  bookings: BookingDetail[] = [];
  filteredBookings: BookingDetail[] = [];
  courses: any[] = [];
  tees: any[] = [];
  members: any[] = [];
  
  // Filters
  filterForm!: FormGroup;
  activeFilters: BookingFilters = {};
  showAdvancedFilters = false;
  
  // Search
  searchTerm = '';
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  totalPages = 0;
  pageRange: number[] = [];
  
  // Selection
  selectedBookings: Set<number> = new Set();
  selectAll = false;
  
  // Modal
  selectedBookingDetails: any = null;
  showDetailsModal = false;
  
  // Status options
  statusOptions = [
    { value: '', label: 'All Records', count: 0 },
    { value: 'confirmed', label: 'Confirmed Bookings', count: 0 },
    { value: 'pending_approval', label: 'Pending Requests', count: 0 },
    { value: 'approved', label: 'Approved Requests', count: 0 },
    { value: 'rejected', label: 'Rejected Requests', count: 0 },
    { value: 'cancelled', label: 'Cancelled Bookings', count: 0 }
  ];
  
  participantOptions = [
    { value: '', label: 'All' },
    { value: 1, label: '1 Player' },
    { value: 2, label: '2 Players' },
    { value: 3, label: '3 Players' },
    { value: 4, label: '4 Players' }
  ];

  // UK timezone utilities
  private ukTimezone = 'Europe/London';
  
  // Helper method to get current UK time
  private getCurrentUKTime(): Date {
    const now = new Date();
    return new Date(now.toLocaleString('en-US', { timeZone: this.ukTimezone }));
  }
  
  // Helper method to check if a booking/request is expired (past date/time)
  private isBookingExpired(booking: BookingDetail): boolean {
    if (!booking.slotDate) return false;
    
    try {
      const ukNow = this.getCurrentUKTime();
      const bookingDateStr = booking.slotDate;
      const bookingTimeStr = booking.slotTime;
      
      // Parse booking date - expecting format like "27 Aug 25"
      const dateParts = bookingDateStr.split(' ');
      if (dateParts.length < 3) return false;
      
      const day = parseInt(dateParts[0]);
      const monthStr = dateParts[1];
      const year = 2000 + parseInt(dateParts[2]); // Convert "25" to 2025
      
      const monthMap: { [key: string]: number } = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };
      
      const month = monthMap[monthStr];
      if (month === undefined) return false;
      
      const bookingDate = new Date(year, month, day);
      
      // If we have time, check date + time
      if (bookingTimeStr) {
        const [hours, minutes] = bookingTimeStr.split(':').map(Number);
        bookingDate.setHours(hours, minutes, 0, 0);
        
        // Compare with current UK time
        return bookingDate < ukNow;
      }
      
      // If no time, just check if date is in the past
      const ukToday = new Date(ukNow.getFullYear(), ukNow.getMonth(), ukNow.getDate());
      const bookingDateOnly = new Date(bookingDate.getFullYear(), bookingDate.getMonth(), bookingDate.getDate());
      
      return bookingDateOnly < ukToday;
    } catch (error) {
      console.error('Error checking if booking is expired:', error);
      return false;
    }
  }
  
  // Public method to check if booking is expired (for template use)
  isExpired(booking: BookingDetail): boolean {
    return this.isBookingExpired(booking);
  }

  constructor(
    private bookingService: BookingService,
    private fb: FormBuilder
  ) {
    this.initializeFilterForm();
    this.setupSearch();
  }

  ngOnInit() {
    this.loadInitialData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeFilterForm() {
    this.filterForm = this.fb.group({
      status: [''],
      course: [''],
      tee: [''],
      dateFrom: [''],
      dateTo: [''],
      member: [''],
      bookingId: [''],
      participants: ['']
    });
  }

  private setupSearch() {
    this.searchSubject
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        this.performSearch(searchTerm);
      });
  }

  private async loadInitialData() {
    this.isLoading = true;
    try {
      await Promise.all([
        this.loadStatistics(),
        this.loadBookings(),
        this.loadCourses()
      ]);
    } catch (error) {
      console.error('Error loading initial data:', error);
    } finally {
      this.isLoading = false;
    }
  }

  private async loadStatistics() {
    try {
      // Load both bookings and join requests to calculate statistics
      const [bookingsResponse, joinRequestsResponse] = await Promise.all([
        this.bookingService.getAllBookings(),
        this.bookingService.getAllJoinRequestsAdmin()
      ]);
      
      console.log('Bookings response:', bookingsResponse.data);
      console.log('Join requests response:', joinRequestsResponse.data);
      
      // Extract data from response structure
      const bookings = (bookingsResponse.data?.data || bookingsResponse.data || []);
      const joinRequests = (joinRequestsResponse.data?.data || joinRequestsResponse.data || []);
      
      console.log('Extracted bookings:', bookings);
      console.log('Extracted join requests:', joinRequests);
      
      const confirmedBookings = Array.isArray(bookings) ? bookings.filter((b: any) => b.status === 'confirmed').length : 0;
      const pendingRequests = Array.isArray(joinRequests) ? joinRequests.filter((r: any) => r.status === 'pending_approval').length : 0;
      const approvedRequests = Array.isArray(joinRequests) ? joinRequests.filter((r: any) => r.status === 'approved').length : 0;
      const rejectedRequests = Array.isArray(joinRequests) ? joinRequests.filter((r: any) => r.status === 'rejected').length : 0;
      
      this.statistics = {
        totalBookings: Array.isArray(bookings) ? bookings.length : 0,
        confirmedBookings: confirmedBookings,
        pendingRequests: pendingRequests,
        approvedRequests: approvedRequests,
        rejectedRequests: rejectedRequests,
        cancelledBookings: Array.isArray(bookings) ? bookings.filter((b: any) => b.status === 'cancelled').length : 0,
        todaysBookings: Array.isArray(bookings) ? this.getTodaysBookings(bookings) : 0,
        activeCourses: Array.isArray(bookings) ? this.getActiveCourses(bookings) : 0
      };
      
      this.updateStatusCounts();
    } catch (error) {
      console.error('Error loading statistics:', error);
      // Initialize empty statistics on error
      this.statistics = {
        totalBookings: 0,
        confirmedBookings: 0,
        pendingRequests: 0,
        approvedRequests: 0,
        rejectedRequests: 0,
        cancelledBookings: 0,
        todaysBookings: 0,
        activeCourses: 0
      };
    }
  }

  private async loadBookings() {
    try {
      // Load both bookings and join requests
      const [bookingsResponse, joinRequestsResponse] = await Promise.all([
        this.bookingService.getAllBookings(this.activeFilters),
        this.bookingService.getAllJoinRequestsAdmin(this.activeFilters)
      ]);
      
      console.log('Bookings response:', bookingsResponse.data);
      console.log('Join requests response:', joinRequestsResponse.data);
      
      this.bookings = [];
      
      // Extract data from response structure
      const bookings = (bookingsResponse.data?.data || bookingsResponse.data || []);
      const joinRequests = (joinRequestsResponse.data?.data || joinRequestsResponse.data || []);
      
      console.log('Extracted bookings for table:', bookings);
      console.log('Extracted join requests for table:', joinRequests);
      
      // Process regular bookings
      if (Array.isArray(bookings)) {
        bookings.forEach((booking: any) => {
          this.bookings.push(this.formatBookingForTable(booking, 'BOOKING'));
        });
      }
      
      // Process join requests
      if (Array.isArray(joinRequests)) {
        joinRequests.forEach((request: any) => {
          this.bookings.push(this.formatJoinRequestForTable(request, 'REQUEST'));
        });
      }
      
      // Keep whatever tab the admin is on after a refresh
      this.applyViewFilter();
    } catch (error) {
      console.error('Error loading bookings:', error);
      this.bookings = [];
      this.filteredBookings = [];
      this.totalItems = 0;
    }
  }

  private async loadCourses() {
    try {
      const response = await this.bookingService.getCoursesForFilter();
      console.log('Courses response:', response.data);
      
      if (response.data.code === 1) {
        this.courses = response.data.data || [];
      } else {
        this.courses = response.data.results || [];
      }
    } catch (error) {
      console.error('Error loading courses:', error);
      this.courses = [];
    }
  }

  onSearch(event: any) {
    const searchTerm = event.target.value;
    this.searchTerm = searchTerm;
    this.searchSubject.next(searchTerm);
  }

  private performSearch(searchTerm: string) {
    // Search narrows within the active tab rather than replacing it
    let rows = this.bookings.filter(b => this.matchesView(b, this.currentView));

    const term = searchTerm.trim().toLowerCase();
    if (term) {
      rows = rows.filter(booking =>
        (booking.booking_id || '').toLowerCase().includes(term) ||
        (booking.member?.name || '').toLowerCase().includes(term) ||
        (booking.course?.name || '').toLowerCase().includes(term)
      );
    }

    this.filteredBookings = rows;
    this.updatePagination();
  }

  switchView(view: BookingView) {
    this.currentView = view;
    this.applyViewFilter();
  }

  /**
   * Which tab a row belongs to. Expiry wins over the stored status, so a past
   * slot lands under Expired rather than lingering in Bookings or Pending.
   * Tab counts and the table both read this, so they can never disagree.
   */
  private matchesView(booking: BookingDetail, view: BookingView): boolean {
    const status = (booking.status || '').toUpperCase();
    switch (view) {
      case 'all': return true;
      case 'expired': return status === 'EXPIRED';
      case 'approved': return status === 'APPROVED';
      case 'pending': return status === 'PENDING_APPROVAL';
      case 'bookings': return booking.type === 'BOOKING' && status !== 'EXPIRED';
      default: return true;
    }
  }

  /** Live per-tab counts, derived from the rows actually loaded. */
  get viewCounts(): Record<BookingView, number> {
    const counts: Record<BookingView, number> = {
      all: 0, bookings: 0, approved: 0, pending: 0, expired: 0
    };
    for (const view of this.views) {
      counts[view.value] = this.bookings.filter(b => this.matchesView(b, view.value)).length;
    }
    return counts;
  }

  private applyViewFilter() {
    // Delegates so tab + search always compose, whichever changed last
    this.performSearch(this.searchTerm);
  }

  private updatePagination() {
    this.totalItems = this.filteredBookings.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage = 1;
  }

  get paginatedBookings(): BookingDetail[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredBookings.slice(start, end);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getStatusBadgeColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'text-bg-success';
      case 'pending_approval': return 'text-bg-warning';
      case 'approved': return 'text-bg-success';
      case 'rejected': return 'text-bg-danger';
      case 'cancelled': return 'text-bg-secondary';
      case 'expired': return 'text-bg-secondary';
      default: return 'text-bg-primary';
    }
  }

  async viewDetails(booking: BookingDetail) {
    // Use the formatted booking data, not the raw details
    this.selectedBookingDetails = booking;
    this.showDetailsModal = true;
  }

  closeDetailsModal() {
    this.showDetailsModal = false;
    this.selectedBookingDetails = null;
  }

  async refreshData() {
    await this.loadInitialData();
  }

  // Additional utility methods
  toggleAdvancedFilters() {
    this.showAdvancedFilters = !this.showAdvancedFilters;
  }

  clearAllFilters() {
    this.filterForm.reset();
    this.searchTerm = '';
    this.currentView = 'all';
    this.selectedBookings.clear();
    this.selectAll = false;
    this.applyViewFilter();
  }

  async onCourseChange(event: any) {
    const courseId = event.target.value;
    const id = parseInt(courseId);
    if (id) {
      try {
        const response = await this.bookingService.getTeesByCourse(id);
        this.tees = response.data || [];
      } catch (error) {
        console.error('Error loading tees:', error);
        this.tees = [];
      }
    } else {
      this.tees = [];
      this.filterForm.patchValue({ tee: '' });
    }
  }

  // Selection methods
  toggleSelectAll() {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.paginatedBookings.forEach(booking => this.selectedBookings.add(booking.id));
    } else {
      this.selectedBookings.clear();
    }
  }

  toggleSelectBooking(bookingId: number) {
    if (this.selectedBookings.has(bookingId)) {
      this.selectedBookings.delete(bookingId);
    } else {
      this.selectedBookings.add(bookingId);
    }
    this.selectAll = this.selectedBookings.size === this.paginatedBookings.length;
  }

  isSelected(bookingId: number): boolean {
    return this.selectedBookings.has(bookingId);
  }

  formatParticipants(booking: BookingDetail): string {
    if (booking.type === 'REQUEST') {
      return `+${booking.participants} players`;
    }
    return `${booking.participants}/4 players`;
  }

  getTypeIcon(type: string): string {
    return type === 'BOOKING' ? 'bi bi-calendar' : 'bi bi-person';
  }

  getStatusIcon(status: string): string {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'bi bi-check-circle';
      case 'pending_approval': return 'bi bi-clock';
      case 'approved': return 'bi bi-check-circle';
      case 'rejected': return 'bi bi-x-circle';
      case 'cancelled': return 'bi bi-ban';
      default: return 'bi bi-calendar';
    }
  }

  changeItemsPerPage(event: any) {
    this.itemsPerPage = parseInt(event.target.value);
    this.currentPage = 1;
    this.updatePagination();
  }

  onItemsPerPageChange() {
    this.currentPage = 1;
    this.updatePagination();
  }

  async exportData(format: 'csv' | 'excel' = 'csv') {
    this.isExporting = true;
    try {
      const response = await this.bookingService.exportBookings(this.activeFilters, format);
      this.downloadFile(response.data, `bookings.${format}`);
      this.showSuccessMessage(`Data exported successfully as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Error exporting data:', error);
      this.showErrorMessage('Failed to export data');
    } finally {
      this.isExporting = false;
    }
  }

  private downloadFile(data: Blob, filename: string) {
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.showSuccessMessage('Booking ID copied to clipboard');
    }).catch(() => {
      this.showErrorMessage('Failed to copy to clipboard');
    });
  }

  private showSuccessMessage(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      timer: 3000,
      showConfirmButton: false
    });
  }

  private showErrorMessage(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      confirmButtonText: 'OK'
    });
  }

  // Add Math to template
  Math = Math;

  // Format booking data for table display
  private formatBookingForTable(booking: any, type: 'BOOKING' | 'REQUEST'): BookingDetail {
    const formattedBooking: BookingDetail = {
      id: booking.id,
      booking_id: booking.booking_id,
      type: type,
      member: {
        name: booking.memberFullName || booking.memberName || 
              (booking.member ? `${booking.member.firstName || ''} ${booking.member.lastName || ''}`.trim() : '') || 'N/A',
        id: booking.memberGolfClubId || 
            (booking.member ? booking.member.golfClubId : '') || 'N/A',
        email: booking.memberEmail || booking.member?.email || 'N/A',
        phone: booking.memberPhone || booking.member?.phone || booking.member?.phoneNumber || 'N/A'
      },
      bookedDate: this.formatDate(booking.createdAt || booking.formattedDate),
      course: {
        name: booking.courseName || 
              (booking.course ? booking.course.courseName : '') || 'N/A',
        id: booking.course?.id || booking.course
      },
      tee: {
        name: booking.teeInfo || booking.teeName || 
              (booking.tee ? `${booking.tee.holeNumber} Holes` : '') || 'N/A',
        id: booking.tee?.id || booking.tee
      },
      slotDate: this.formatDate(booking.slot_date || booking.slotDate || booking.bookingDate),
      slotTime: this.formatTime(booking.booking_time || booking.bookingTime),
      participants: booking.participants || booking.totalParticipants || 0,
      status: booking.status?.toUpperCase() || 'CONFIRMED',
      details: booking
    };
    
    // Mark as expired if past date/time
    if (this.isBookingExpired(formattedBooking)) {
      formattedBooking.status = 'EXPIRED';
    }
    
    return formattedBooking;
  }

  // Format join request data for table display
  private formatJoinRequestForTable(request: any, type: 'REQUEST'): BookingDetail {
    const formattedRequest: BookingDetail = {
      id: request.id,
      booking_id: request.request_id || request.requestId,
      type: type,
      member: {
        name: request.requesterName || request.memberFullName || 
              (request.member ? `${request.member.firstName || ''} ${request.member.lastName || ''}`.trim() : '') || 'N/A',
        id: request.requesterMemberId || request.memberGolfClubId || 
            (request.member ? request.member.golfClubId : '') || 'N/A',
        email: request.requesterEmail || request.member?.email || 'N/A',
        phone: request.requesterPhone || request.member?.phone || request.member?.phoneNumber || 'N/A'
      },
      bookedDate: this.formatDate(request.createdAt || request.requestDate),
      course: {
        name: request.courseName || 
              (request.original_booking?.course ? request.original_booking.course.courseName : '') || 'N/A',
        id: request.course || request.original_booking?.course?.id
      },
      tee: {
        name: request.tee || 
              (request.original_booking?.tee ? `${request.original_booking.tee.holeNumber} Holes` : '') || 'N/A',
        id: request.teeId || request.original_booking?.tee?.id
      },
      slotDate: this.formatDate(request.slotDate || request.original_booking?.slot_date),
      slotTime: this.formatTime(request.slotTime || request.original_booking?.booking_time),
      participants: request.participants || request.requestedParticipants || 0,
      status: request.status?.toUpperCase() || 'PENDING_APPROVAL',
      details: request
    };
    
    // Mark as expired if past date/time
    if (this.isBookingExpired(formattedRequest)) {
      formattedRequest.status = 'EXPIRED';
    }
    
    return formattedRequest;
  }

  private formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: '2-digit'
    });
  }

  private formatTime(timeString: string): string {
    if (!timeString) return '';
    // Ensure 24-hour format
    return timeString.substring(0, 5);
  }

  private updateStatusCounts() {
    this.statusOptions[0].count = this.statistics.totalBookings;
    this.statusOptions[1].count = this.statistics.confirmedBookings;
    this.statusOptions[2].count = this.statistics.pendingRequests;
    this.statusOptions[3].count = this.statistics.approvedRequests;
    this.statusOptions[4].count = this.statistics.rejectedRequests;
    this.statusOptions[5].count = this.statistics.cancelledBookings;
  }

  private getTodaysBookings(bookings: any[]): number {
    const today = new Date().toISOString().split('T')[0];
    return bookings.filter(booking => {
      const bookingDate = booking.slot_date || booking.slotDate;
      return bookingDate && bookingDate.startsWith(today);
    }).length;
  }

  private getActiveCourses(bookings: any[]): number {
    const uniqueCourses = new Set();
    bookings.forEach(booking => {
      if (booking.course) {
        uniqueCourses.add(booking.course);
      }
    });
    return uniqueCourses.size;
  }


}
