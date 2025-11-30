import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UtilsService } from '../../../shared/utils.service';
import { WishlistService } from '../../../shared/wishlist.service';
import { CartService } from '../../../shared/cart.service';
import { Company } from '../../../../assets/data/companydata/company.model';
import { CartSidebarComponent } from '../../../shared/cart-sidebar/cart-sidebar.component';
import { MobileSidebarComponent } from '../../../shared/mobile-sidebar/mobile-sidebar.component';

@Component({
    selector: 'app-mobile-header',
    standalone: true,
    imports: [RouterModule, CartSidebarComponent, MobileSidebarComponent, CommonModule, FormsModule],
    templateUrl: './mobile-header.component.html',
    styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent {
    @Input() company!: Company;
    @Input() searchText!: string;

    @Output() searchSubmit = new EventEmitter<void>();
    @Output() logoutEvent = new EventEmitter<void>();

    isProfileOpen = false; // <-- REQUIRED for dropdown open/close

    constructor(
        public cartService: CartService,
        public wishlistService: WishlistService,
        public utilsService: UtilsService
    ) { }
}
