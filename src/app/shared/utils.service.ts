import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from './cart.service';
import product_data from './product-data';
import { IProduct } from './product-type';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSearchOpen = false;
        this.isProductModalOpen = false;
        this.isMobileSidebarOpen = false;   // ✅ close sidebar on route change
        this.removeBackdropAndProductModal();
      }
    });
  }

  // Flags
  public videoUrl: string = 'https://www.youtube.com/embed/EW4ZYb3mCZk';
  public isVideoOpen: boolean = false;
  public isSearchOpen: boolean = false;
  public isProductModalOpen: boolean = false;
  public iframeElement: HTMLIFrameElement | null = null;

  // Product modal
  public modalId: string = 'product-modal-641e887d05f9ee1717e1348a';
  public product: IProduct = product_data[0];
  public isMobileSidebarOpen: boolean = false;

  // ✅ Mobile sidebar controls
  openMobileSidebar() {
    this.isMobileSidebarOpen = true;
  }
  closeMobileSidebar() {
    this.isMobileSidebarOpen = false;
  }
  toggleMobileSidebar() {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
  }

  // Video modal
  playVideo(videoId: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    const videoOverlay = document.querySelector('#video-overlay');
    this.videoUrl = `https://www.youtube.com/embed/${videoId}`;

    if (!this.iframeElement) {
      this.iframeElement = document.createElement('iframe');
      this.iframeElement.setAttribute('src', this.videoUrl);
      this.iframeElement.style.width = '60%';
      this.iframeElement.style.height = '80%';
    }

    this.isVideoOpen = true;
    videoOverlay?.classList.add('open');
    videoOverlay?.appendChild(this.iframeElement);
  }

  closeVideo() {
    if (!isPlatformBrowser(this.platformId)) return;
    const videoOverlay = document.querySelector('#video-overlay.open');
    if (this.iframeElement) {
      this.iframeElement.remove();
      this.iframeElement = null;
    }
    this.isVideoOpen = false;
    videoOverlay?.classList.remove('open');
  }

  // Search
  handleSearchOpen() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  // Product modal
  handleOpenModal(id: string, item: IProduct) {
    this.isProductModalOpen = true;
    this.modalId = id;
    this.product = item;
    this.productService.handleImageActive(item.img);
    this.cartService.initialOrderQuantity();
  }

  // Remove modal backdrop
  removeBackdropAndProductModal() {
    if (!isPlatformBrowser(this.platformId)) return;
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const product_modal = document.querySelector('.tp-product-modal.show') as HTMLElement;

    if (modalBackdrop) {
      modalBackdrop.remove();
      document.body.classList.remove('modal-open');
      document.body.removeAttribute('style');
    }

    if (product_modal) {
      product_modal.style.display = 'none';
    }
  }
  handleOpenMobileMenu() {
    this.toggleMobileSidebar();
  }
}
