import { NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, HostListener, input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  standalone: true,
  styleUrl: './default-header.component.scss',
  imports: [RouterLink, RouterLinkActive, NgIf, NgTemplateOutlet, NgStyle]
})
export class DefaultHeaderComponent {

  constructor(private authService: AuthService) {}

  sidebarId = input('sidebar1');

  @Output() sidebarToggle = new EventEmitter<void>();

  userMenuOpen = false;

  toggleSidebar(): void {
    this.sidebarToggle.emit();
  }

  toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
  }

  closeUserMenu(): void {
    this.userMenuOpen = false;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.closeUserMenu();
  }

  async onLogout(): Promise<void> {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of the admin panel.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    });

    this.closeUserMenu();

    if (result.isConfirmed) {
      const logoutButton = document.querySelector('[data-logout-btn]') as HTMLElement;
      if (logoutButton) {
        logoutButton.style.pointerEvents = 'none';
        logoutButton.style.opacity = '0.6';
      }
      this.authService.performLogout();
    }
  }
}
