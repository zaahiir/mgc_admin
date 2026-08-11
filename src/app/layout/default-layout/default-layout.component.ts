import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DefaultFooterComponent, DefaultHeaderComponent } from './';
import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, DefaultHeaderComponent, DefaultFooterComponent]
})
export class DefaultLayoutComponent {
  public navItems = navItems;

  /** Mobile off-canvas drawer open state */
  sidebarVisible = false;

  /** Desktop collapsed (icon-only) state */
  sidebarNarrow = false;

  private get isMobile(): boolean {
    return window.innerWidth < 768;
  }

  toggleSidebar(): void {
    if (this.isMobile) {
      this.sidebarVisible = !this.sidebarVisible;
    } else {
      this.sidebarNarrow = !this.sidebarNarrow;
    }
  }

  closeSidebar(): void {
    this.sidebarVisible = false;
  }

  onNavClick(): void {
    if (this.isMobile) {
      this.closeSidebar();
    }
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeSidebar();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (!this.isMobile) {
      this.sidebarVisible = false;
    }
  }
}
