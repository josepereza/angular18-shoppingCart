import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export default class CartComponent {
cartService=inject(CartService)

cart = this.cartService.cart();
  cartTotal = computed(() => {
    return this.cart.reduce((acc, cartItem) => acc + cartItem.product.price! * cartItem.quantity, 0);
  });
}
