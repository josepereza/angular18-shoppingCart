import { Component, computed, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  serviceProduct=inject(ProductService)
  cartService=inject(CartService)
  search = new FormControl(' ', {nonNullable: true});
  ngOnInit(): void {
    
    this.search.valueChanges.pipe(debounceTime(500),distinctUntilChanged()).
    subscribe(data=>{
      console.log(data)
      this.serviceProduct.searchQuery.set(data)
      
      
    })
  }
  /* cartQuantity = computed(() => {
    return this.cartService.cart().reduce((acc, cartItem: CartItem) => acc + cartItem.quantity, 0);
  }); */
}
