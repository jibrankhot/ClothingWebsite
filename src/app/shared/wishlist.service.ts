import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from './product-type';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlists: IProduct[] = [];
  private isBrowser: boolean;

  constructor(
    private toastrService: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.wishlists = JSON.parse(localStorage.getItem('wishlist_products') || '[]');
    }
  }

  public getWishlistProducts() {
    return this.wishlists;
  }

  // add_wishlist_product
  add_wishlist_product(payload: IProduct) {
    const isAdded = this.wishlists.findIndex((p: IProduct) => p.id === payload.id);
    if (isAdded !== -1) {
      this.wishlists = this.wishlists.filter((p: IProduct) => p.id !== payload.id);
      this.toastrService.error(`${payload.title} removed from wishlist`);
    } else {
      this.wishlists.push(payload);
      this.toastrService.success(`${payload.title} added to wishlist`);
    }
    this.saveWishlist();
  }

  // removeWishlist
  removeWishlist(payload: IProduct) {
    this.wishlists = this.wishlists.filter((p: IProduct) => p.id !== payload.id);
    this.toastrService.error(`${payload.title} removed from wishlist`);
    this.saveWishlist();
  }

  private saveWishlist() {
    if (this.isBrowser) {
      localStorage.setItem('wishlist_products', JSON.stringify(this.wishlists));
    }
  }
}
