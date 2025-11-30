import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuBarComponent } from '../../../shared/menu-bar/menu-bar.component';
import { CartSidebarComponent } from '../../../shared/cart-sidebar/cart-sidebar.component';
import { Company } from '../../../../assets/data/companydata/company.model';
import { CartService } from '../../../shared/cart.service';
import { WishlistService } from '../../../shared/wishlist.service';
import { UtilsService } from '../../../shared/utils.service';

@Component({
    selector: 'app-desktop-header',
    standalone: true,
    imports: [MenuBarComponent, RouterModule, CartSidebarComponent, CommonModule, FormsModule],
    templateUrl: './desktop-header.component.html',
    styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent {
    @Input() company!: Company;
    @Input() searchText!: string;

    @Output() searchSubmit = new EventEmitter<void>();
    @Output() logoutEvent = new EventEmitter<void>();

    isProfileOpen = false; // <-- ADD THIS

    constructor(
        public cartService: CartService,
        public wishlistService: WishlistService,
        public utilsService: UtilsService
    ) { }
}
