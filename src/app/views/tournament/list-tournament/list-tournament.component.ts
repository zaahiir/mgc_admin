import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-tournament',
  standalone: true,
  imports: [NgClass, CommonModule, RouterLink, ReactiveFormsModule, FormsModule, NgStyle],
  templateUrl: './list-tournament.component.html',
  styleUrl: './list-tournament.component.scss'
})
export class ListTournamentComponent implements OnInit {
  tooltipEditText = 'Edit';
  tooltipDeleteText = 'Delete';

  Math = Math;
  currentPage = 1;
  itemsPerPage = 10;
  pageRange: number[] = [];

  tournamentList: any[] = [];

  isLoading = false;
  searchTerm: string = '';

  ngOnInit(): void {
    this.updatePageRange();
  }

  search() {
  }

  get filteredCount(): number {
    return this.tournamentList.length;
  }

  get paginatedTournamentList(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.tournamentList.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCount / this.itemsPerPage);
  }

  updatePageRange(): void {
    const total = this.totalPages;
    let start = Math.max(1, this.currentPage - 1);
    let end = Math.min(total, start + 2);
    if (end === total) {
      start = Math.max(1, total - 2);
    }
    this.pageRange = Array.from({ length: Math.min(3, total) }, (_, i) => start + i);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePageRange();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }
}