import { NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, HostListener, input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  standalone: true,
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

  onLogout(): void {
    if (confirm('Are you sure you want to logout?')) {
      const logoutButton = document.querySelector('[data-logout-btn]') as HTMLElement;
      if (logoutButton) {
        logoutButton.style.pointerEvents = 'none';
        logoutButton.style.opacity = '0.6';
      }
      this.authService.performLogout();
    }
  }
}
