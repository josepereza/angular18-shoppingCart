import { Component, Signal, computed, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { CartItem } from '../../interfaces/cart-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, JsonPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export default class CartComponent {
cartService=inject(CartService)
cart=signal<CartItem[]>(this.cartService.cart())

  cartTotal = computed(() => {
    return this.cart().reduce((acc, cart) => acc + cart.product.price! * cart.quantity, 0);
  });

  removeItem(id: number | undefined){
    this.cartService.removeProductFromCart(id)
    this.cart.set(this.cartService.cart())
  }
}
