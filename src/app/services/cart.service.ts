import { Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<CartItem[]>([]);

  constructor() { }
  /*  addProductToCart(product: Product, quantity: number) {
    console.log(product)
    const cartItem: CartItem = {product, quantity};
    this.cart.update(cart => [...cart, cartItem]);
    console.log(this.cart())
  }  */


  addProductToCart(product: Product,quantity:number) {
   
    this.cart.update((currentCart) => {
     const existingItem = currentCart.find(
       (i) => i.product.id === product.id
     );

     if (existingItem) {
       // Increment quantity if item already exists
       existingItem.quantity=existingItem.quantity + quantity ;
       const cartItem: CartItem = {product, quantity};
       return currentCart
             
       
     } else {
       // Add the new item if it doesn't exist
       const cartItem: CartItem = {product, quantity};
       return [...currentCart, cartItem ]      
       
      }
   
   
   }); 

   
 } 

  updateProductQuantity(productId: number, quantity: number) {
    if (quantity === 0) {
      this.removeProductFromCart(productId);
      return;
    }
    this.cart.update(cart => cart.map(cartItem => {
      if (cartItem.product.id === productId) {
        cartItem.quantity = quantity;
      }
      return cartItem;
    }));
  }

  removeProductFromCart(productId: number | undefined) {
    this.cart.update(cart => cart.filter(cartItem => cartItem.product.id !== productId));
  }
}
