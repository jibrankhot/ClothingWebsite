import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product-type';
import { NewArrivalCacheService } from './newarrivalcacheservice';

@Injectable({ providedIn: 'root' })
export class CartService {
  public orderQuantity = 1;
  public isCartOpen = false;
  private cart_products: IProduct[] = [];
  private isBrowser: boolean;
  private storageKey = 'cart_products';

  private cartSubject = new BehaviorSubject<IProduct[]>([]);
  public cart$ = this.cartSubject.asObservable();

  constructor(
    private toastrService: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _cacheService?: NewArrivalCacheService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const storedCart = localStorage.getItem(this.storageKey);
      this.cart_products = storedCart ? JSON.parse(storedCart) : [];
      this.cartSubject.next([...this.cart_products]);
    }
  }

  // =========================
  // CART FUNCTIONS
  // =========================
  public getCartProducts(): IProduct[] {
    return this.cart_products;
  }

  handleOpenCartSidebar() {
    this.isCartOpen = !this.isCartOpen;
  }

  async addCartProduct(payload: IProduct) {
    if (payload.status === 'Out of Stock' || payload.quantity === 0) {
      this.toastrService.error(`Out of stock: ${payload.title}`);
      return;
    }

    const isExist = this.cart_products.some(i => i.id === payload.id);

    if (!isExist) {
      this.cart_products.push({ ...payload, orderQuantity: 1 });
      this.toastrService.success(`${payload.title} added to cart`);
      if (this._cacheService) await this._cacheService.updateProductQuantity(payload.id, 1);
    } else {
      this.cart_products = this.cart_products.map(item => {
        if (item.id === payload.id && item.orderQuantity !== undefined) {
          if (item.quantity >= item.orderQuantity + this.orderQuantity) {
            item.orderQuantity += this.orderQuantity;
            this.toastrService.success(`${this.orderQuantity} ${item.title} added to cart`);
            if (this._cacheService) this._cacheService.updateProductQuantity(payload.id, this.orderQuantity);
          } else {
            this.toastrService.info(`No more quantity available for this product!`);
            this.orderQuantity = 1;
          }
        }
        return { ...item };
      });
    }

    this.saveCart();
    this.cartSubject.next([...this.cart_products]);
  }

  quantityDecrement(payload: IProduct) {
    this.cart_products = this.cart_products.map(item => {
      if (item.id === payload.id && item.orderQuantity && item.orderQuantity > 1) {
        item.orderQuantity -= 1;
        this.toastrService.info(`Decrement Quantity For ${item.title}`);
        if (this._cacheService) this._cacheService.restoreProductQuantity(payload.id, 1);
      }
      return { ...item };
    });

    this.saveCart();
    this.cartSubject.next([...this.cart_products]);
  }

  async removeCartProduct(payload: IProduct) {
    const product = this.cart_products.find(p => p.id === payload.id);
    if (product?.orderQuantity && this._cacheService) {
      await this._cacheService.restoreProductQuantity(payload.id, product.orderQuantity);
    }

    this.cart_products = this.cart_products.filter(p => p.id !== payload.id);
    this.toastrService.error(`${payload.title} removed from cart`);

    this.saveCart();
    this.cartSubject.next([...this.cart_products]);
  }

  clear_cart() {
    if (window.confirm("Are you sure you want to delete all cart items?")) {
      if (this._cacheService) {
        this.cart_products.forEach(item => {
          if (item.orderQuantity) this._cacheService?.restoreProductQuantity(item.id, item.orderQuantity);
        });
      }
      this.cart_products = [];
      this.saveCart();
      this.cartSubject.next([...this.cart_products]);
    }
  }

  totalPriceQuantity() {
    return this.cart_products.reduce((acc, item) => {
      if (item.orderQuantity) {
        const itemTotal = item.discount && item.discount > 0
          ? (item.price - (item.price * item.discount) / 100) * item.orderQuantity
          : item.price * item.orderQuantity;
        acc.total += itemTotal;
        acc.quantity += item.orderQuantity;
      }
      return acc;
    }, { total: 0, quantity: 0 });
  }

  // =========================
  // ORDER QUANTITY LOGIC
  // =========================
  increment() { return this.orderQuantity += 1; }
  decrement() { return this.orderQuantity > 1 ? this.orderQuantity - 1 : 1; }
  initialOrderQuantity() { return this.orderQuantity = 1; }

  // =========================
  // EXTRA UTILITY FUNCTIONS
  // =========================
  public getTotalItems(): number {
    return this.cart_products.reduce((acc, item) => acc + (item.orderQuantity || 0), 0);
  }

  public hasProduct(id: number | string): boolean {
    return this.cart_products.some(item => item.id === id);
  }

  // ✅ fixed: cache now syncs when updating quantity directly
  public updateCartProductQuantity(id: number | string, quantity: number) {
    this.cart_products = this.cart_products.map(item => {
      if (item.id === id) {
        const oldQty = item.orderQuantity || 0;
        let newQty = quantity;

        if (newQty < 1) {
          newQty = 1;
        } else if (newQty > item.quantity) {
          newQty = item.quantity;
        }

        const diff = newQty - oldQty;

        if (diff > 0 && this._cacheService) {
          this._cacheService.updateProductQuantity(item.id, diff);
        } else if (diff < 0 && this._cacheService) {
          this._cacheService.restoreProductQuantity(item.id, Math.abs(diff));
        }

        item.orderQuantity = newQty;
      }
      return { ...item };
    });

    this.saveCart();
    this.cartSubject.next([...this.cart_products]);
  }

  // =========================
  // LOCAL STORAGE HANDLING
  // =========================
  private saveCart() {
    if (this.isBrowser) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart_products));
    }
  }

  // Add this method inside CartService
  handleQuantityChange(product: IProduct, event: Event) {
    const input = event.target as HTMLInputElement;
    let quantity = parseInt(input.value, 10);

    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
    } else if (quantity > product.quantity) {
      quantity = product.quantity;
    }

    this.updateCartProductQuantity(product.id, quantity);
  }

}
