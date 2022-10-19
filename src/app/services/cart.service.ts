import { Injectable } from '@angular/core';
import { ProductInterface } from '../data/products';
import { HttpClient } from '@angular/common/http';
import { ShippingInterface } from '../data/shipping';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ProductInterface[] = [];
  constructor(private http: HttpClient) {}
  addToCart(product: ProductInterface) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<ShippingInterface[]>('../assets/shipping.json');
  }
}
