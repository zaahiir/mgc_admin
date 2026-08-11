import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle, CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnquiryService } from '../../common-service/enquiry/enquiry.service';
import Swal from 'sweetalert2';

// Interface for enquiry data
interface EnquiryInterface {
  id: number;
  contactEnquiryFirstName: string;
  contactEnquiryLastName: string;
  contactEnquiryPhoneNumber: string;
  contactEnquiryEmail: string;
  contactEnquiryMessage: string;
  contactEnquiryDate: string;
  status: string;
}

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [
    NgClass,
    CommonModule,
    DatePipe,
    FormsModule
  ],
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.scss'
})
export class EnquiryComponent implements OnInit {

  Math = Math;

  enquiryList: EnquiryInterface[] = [];
  pageRange: number[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  isLoading = false;
  searchTerm: string = '';

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit() {
    this.loadEnquiryList();
  }

  async loadEnquiryList() {
    if (this.isLoading) return;

    this.isLoading = true;
    try {
      const response = await this.enquiryService.listEnquiry('0');
      if (response.data.code === 1) {
        this.enquiryList = response.data.data;
        this.updatePageRange();
      } else {
        await Swal.fire('Error', 'Failed to load enquiry list', 'error');
      }
    } catch (error) {
      console.error('Error loading enquiry list:', error);
      await Swal.fire('Error', 'An error occurred while loading the enquiry list', 'error');
    } finally {
      this.isLoading = false;
    }
  }

  updatePageRange() {
    const totalPages = this.totalPages;
    let start = Math.max(1, this.currentPage - 1);
    let end = Math.min(totalPages, start + 2);

    if (end === totalPages) {
      start = Math.max(1, totalPages - 2);
    }

    this.pageRange = Array.from({ length: Math.min(3, totalPages) }, (_, i) => start + i);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages && !this.isLoading) {
      this.currentPage = page;
      this.updatePageRange();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages && !this.isLoading) {
      this.changePage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1 && !this.isLoading) {
      this.changePage(this.currentPage - 1);
    }
  }

  search() {
    this.currentPage = 1;
    this.updatePageRange();
  }

  get paginatedEnquiryList() {
    let filtered = this.enquiryList;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.enquiryList.filter(enquiry =>
        enquiry.contactEnquiryFirstName.toLowerCase().includes(searchTermLower) ||
        enquiry.contactEnquiryLastName.toLowerCase().includes(searchTermLower) ||
        enquiry.contactEnquiryEmail.toLowerCase().includes(searchTermLower) ||
        enquiry.contactEnquiryPhoneNumber.toLowerCase().includes(searchTermLower) ||
        enquiry.contactEnquiryMessage.toLowerCase().includes(searchTermLower)
      );
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get filteredCount(): number {
    if (!this.searchTerm) return this.enquiryList.length;
    const searchTermLower = this.searchTerm.toLowerCase();
    return this.enquiryList.filter(enquiry =>
      enquiry.contactEnquiryFirstName.toLowerCase().includes(searchTermLower) ||
      enquiry.contactEnquiryLastName.toLowerCase().includes(searchTermLower) ||
      enquiry.contactEnquiryEmail.toLowerCase().includes(searchTermLower) ||
      enquiry.contactEnquiryPhoneNumber.toLowerCase().includes(searchTermLower) ||
      enquiry.contactEnquiryMessage.toLowerCase().includes(searchTermLower)
    ).length;
  }

  get totalPages() {
    const filteredLength = this.searchTerm
      ? this.enquiryList.filter(enquiry =>
          enquiry.contactEnquiryFirstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.contactEnquiryLastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.contactEnquiryEmail.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.contactEnquiryPhoneNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.contactEnquiryMessage.toLowerCase().includes(this.searchTerm.toLowerCase())
        ).length
      : this.enquiryList.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }

  // Updated method to toggle status
  async toggleStatus(enquiryId: number) {
    try {
      const response = await this.enquiryService.toggleEnquiryStatus(enquiryId.toString());
      if (response.data.code === 1) {
        // Success - refresh the enquiry list
        await this.loadEnquiryList();
        await Swal.fire('Success', response.data.message, 'success');
      } else {
        console.error('Failed to toggle status:', response.data.message);
        await Swal.fire('Error', 'Failed to update status', 'error');
      }
    } catch (error) {
      console.error('Error toggling status:', error);
      await Swal.fire('Error', 'Error updating status', 'error');
    }
  }

  // Helper method to get the next status for display
  getNextStatus(currentStatus: string): string {
    return currentStatus === 'pending' ? 'completed' : 'pending';
  }

  // Helper method to get button color
  getButtonColor(currentStatus: string): string {
    return currentStatus === 'pending' ? 'text-bg-success' : 'text-bg-warning';
  }

  // Optional: Method to filter enquiries by status
  filterByStatus(status: string) {
    if (status === 'all') {
      this.currentPage = 1;
    } else {
      this.currentPage = 1;
    }
    this.updatePageRange();
  }
}
