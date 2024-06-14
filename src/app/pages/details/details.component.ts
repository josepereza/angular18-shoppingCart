import { Component, Injector, OnInit, Signal, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent implements OnInit {
  //@Input() id!: number;
  id  = input.required<number>();    // Signal<number>
  
  productoService=inject(ProductService)
  producto!:Signal<Product | undefined>
  injector=inject(Injector)

  ngOnInit(): void {
  this.producto=toSignal(this.productoService.getProductById(this.id()),{injector:this.injector});
  }
}
