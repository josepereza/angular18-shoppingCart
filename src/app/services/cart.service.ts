import { Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<CartItem[]>([]);

  constructor() { }
  addProductToCart(product: Product, quantity: number) {
    console.log(product)
    const cartItem: CartItem = {product, quantity};
    this.cart.update(cart => [...cart, cartItem]);
    console.log(this.cart())
  }
}
