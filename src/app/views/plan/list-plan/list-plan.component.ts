import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlanService } from '../../common-service/plan/plan.service';
import Swal from 'sweetalert2';

interface PlanInterface {
  id: number;
  planName: string;
  planDuration: number;
  planPrice: number;
}

@Component({
  selector: 'app-list-plan',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    ReactiveFormsModule, FormsModule
  ],
  templateUrl: './list-plan.component.html',
  styleUrl: './list-plan.component.scss'
})
export class ListPlanComponent implements OnInit {
  tooltipEditText = 'Edit';
  tooltipDeleteText = 'Delete';
  Math = Math;

  planList: PlanInterface[] = [];
  pageRange: number[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  isLoading = false;
  searchTerm: string = '';

  constructor(private planService: PlanService) {}

  ngOnInit() {
    this.loadPlanList();
  }

  updatePageRange() {
    const totalPages = this.totalPages;
    let start = Math.max(1, this.currentPage - 1);
    let end = Math.min(totalPages, start + 2);

    if (end === totalPages) {
      start = Math.max(1, totalPages - 2);
    }

    this.pageRange = Array.from({length: Math.min(3, totalPages)}, (_, i) => start + i);
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

  async loadPlanList() {
    if (this.isLoading) return;

    this.isLoading = true;
    try {
      const response = await this.planService.listPlan('0');
      if (response.data.code === 1) {
        this.planList = response.data.data;
        this.updatePageRange();
      } else {
        await Swal.fire('Error', 'Failed to load Plan list', 'error');
      }
    } catch (error) {
      console.error('Error loading Plan list:', error);
      await Swal.fire('Error', 'An error occurred while loading the Plan list', 'error');
    } finally {
      this.isLoading = false;
    }
  }

  search() {
    this.currentPage = 1;
    this.updatePageRange();
  }

  get paginatedPlanList() {
    let filtered = this.planList;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.planList.filter(plan =>
        plan.planName.toLowerCase().includes(searchTermLower) ||
        plan.planDuration.toString().includes(searchTermLower) ||
        plan.planPrice.toString().includes(searchTermLower)
      );
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get filteredCount(): number {
    if (!this.searchTerm) return this.planList.length;
    const searchTermLower = this.searchTerm.toLowerCase();
    return this.planList.filter(plan =>
      plan.planName.toLowerCase().includes(searchTermLower) ||
      plan.planDuration.toString().includes(searchTermLower) ||
      plan.planPrice.toString().includes(searchTermLower)
    ).length;
  }

  get totalPages() {
    const filteredLength = this.searchTerm ?
      this.planList.filter(plan =>
        plan.planName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        plan.planDuration.toString().includes(this.searchTerm.toLowerCase()) ||
        plan.planPrice.toString().includes(this.searchTerm.toLowerCase())
      ).length :
      this.planList.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }

  async deletePlan(id: number) {
    if (this.isLoading) return;

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      this.isLoading = true;
      try {
        const response = await this.planService.deletePlan(id.toString());
        if (response.data.code === 1) {
          this.planList = this.planList.filter(plan => plan.id !== id);
          await Swal.fire('Deleted!', 'Plan has been deleted.', 'success');
          await this.loadPlanList();
        } else {
          await Swal.fire('Error', 'Failed to delete Plan', 'error');
        }
      } catch (error) {
        console.error('Error deleting Plan:', error);
        await Swal.fire('Error', 'An error occurred while deleting the Plan', 'error');
      } finally {
        this.isLoading = false;
      }
    }
  }
}
