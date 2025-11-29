import { Component, Input } from '@angular/core';
import { IMenuItem } from '../menu-d-type';
import { menu_data } from '../menu-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class MenuBarComponent {
  @Input() isMobile: boolean = false;

  public menu_data: IMenuItem[] = menu_data;

  public activeTabId: number | null = null; // Mobile menu tracking
  public openSubmenuIds: { [parentId: number]: Set<number> } = {}; // Mobile submenu tracking

  // === Desktop submenu tracking ===
  public openMenuIndex: number | null = null;
  private closeTimeout: any;

  openSubmenu(index: number) {
    clearTimeout(this.closeTimeout);
    this.openMenuIndex = index;
  }

  closeSubmenu() {
    this.closeTimeout = setTimeout(() => {
      this.openMenuIndex = null;
    }, 200); // delay before closing
  }

  // === Mobile logic ===
  toggleTab(id: number) {
    this.activeTabId = this.activeTabId === id ? null : id;
    if (this.activeTabId === null) {
      this.openSubmenuIds = {};
    }
  }

  toggleSubmenu(parentId: number, subId: number) {
    if (!this.openSubmenuIds[parentId]) {
      this.openSubmenuIds[parentId] = new Set([subId]);
    } else {
      if (this.openSubmenuIds[parentId].has(subId)) {
        this.openSubmenuIds[parentId].delete(subId);
      } else {
        this.openSubmenuIds[parentId].add(subId);
      }
    }
  }

  isSubmenuOpen(parentId: number, subId: number): boolean {
    return this.openSubmenuIds[parentId]?.has(subId) || false;
  }
}
