import { Component, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet],
  template: `
    <router-outlet />
    <div *ngIf="isPreloading" class="app-preloader" role="status" aria-live="polite">
      <div class="spinner-grow spinner-grow-sm" aria-hidden="true"></div>
      <span>Loading...</span>
    </div>
  `,
  styles: [`
    .app-preloader {
      position: fixed;
      inset: 0;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;
      background: #fff;
    }
  `]
})
export class AppComponent implements OnDestroy {
  title = 'Admin Panel';
  isPreloading = true;

  private readonly preloaderTimer = setTimeout(() => {
    this.isPreloading = false;
  }, 3000);

  ngOnDestroy(): void {
    clearTimeout(this.preloaderTimer);
  }
}
