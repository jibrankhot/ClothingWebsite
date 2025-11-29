import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product-type';
import localforage from 'localforage';

@Injectable({
    providedIn: 'root'
})
export class NewArrivalCacheService {
    private readonly storageKey = 'newArrivalProducts';
    private productsSubject = new BehaviorSubject<IProduct[]>([]);
    public products$ = this.productsSubject.asObservable();

    constructor() {
        this.init();
    }

    private async init() {
        // Initialize localforage once
        localforage.config({
            name: 'bit-buy-shop',
            storeName: 'new_arrivals_cache'
        });

        // Load cached products on startup
        await this.loadFromCache();
    }

    private async loadFromCache() {
        const cached = await localforage.getItem<IProduct[]>(this.storageKey);
        if (cached && cached.length) {
            this.productsSubject.next(cached);
        }
    }

    async setProducts(products: IProduct[]) {
        // Clone to avoid side effects
        const cloned = products.map(p => ({
            ...p,
            imageURLs: [...(p.imageURLs || [])],
            additionalInformation: [...(p.additionalInformation || [])],
            sizes: [...(p.sizes || [])]
        }));
        await localforage.setItem(this.storageKey, cloned);
        this.productsSubject.next(cloned);
    }

    async getProductsFromStorage(): Promise<IProduct[] | null> {
        return await localforage.getItem<IProduct[]>(this.storageKey);
    }

    async clearCache() {
        await localforage.removeItem(this.storageKey);
        this.productsSubject.next([]);
    }

    getProductById(id: number | string): IProduct | undefined {
        return this.productsSubject.value.find(product => String(product.id) === String(id));
    }

    async getProductByIdAsync(id: number | string): Promise<IProduct | undefined> {
        let products = this.productsSubject.value;
        if (!products.length) {
            products = (await localforage.getItem<IProduct[]>(this.storageKey)) || [];
        }
        return products.find(product => String(product.id) === String(id));
    }

    /** Decrease stock when added to cart */
    async updateProductQuantity(id: number | string, quantityToDeduct: number) {
        const updatedProducts = this.productsSubject.value.map(product => {
            if (product.id === id) {
                const newQuantity = Math.max((product.quantity || 0) - quantityToDeduct, 0);
                return {
                    ...product,
                    quantity: newQuantity,
                    status: newQuantity > 0 ? 'Available' : 'Out of Stock'
                };
            }
            return product;
        });

        await localforage.setItem(this.storageKey, updatedProducts);
        this.productsSubject.next(updatedProducts);
    }

    /** Increase stock when removed/decremented from cart */
    async restoreProductQuantity(id: number | string, quantityToRestore: number) {
        const updatedProducts = this.productsSubject.value.map(product => {
            if (product.id === id) {
                const newQuantity = (product.quantity || 0) + quantityToRestore;
                return {
                    ...product,
                    quantity: newQuantity,
                    status: newQuantity > 0 ? 'Available' : 'Out of Stock'
                };
            }
            return product;
        });

        await localforage.setItem(this.storageKey, updatedProducts);
        this.productsSubject.next(updatedProducts);
    }
}
