import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent {
productService=inject(ProductService)

}
