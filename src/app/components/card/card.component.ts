import { Component, inject, input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink,  FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  quantity: number = 1;
  product = input.required<Product>();
  cartService=inject(CartService)
  onAddToCart(): void {
    this.cartService.addProductToCart(this.product(), this.quantity);
  }

}
