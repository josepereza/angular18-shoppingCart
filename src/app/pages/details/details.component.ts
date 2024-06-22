import {
  Component,
  Injector,
  OnInit,
  Signal,
  inject,
  input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export default class DetailsComponent implements OnInit {
  //@Input() id!: number;
  id = input.required<number>(); // Signal<number>

  productoService = inject(ProductService);
  producto!: Signal<any>;
  injector = inject(Injector);
  cartService= inject(CartService)
  cantidad:number=1
  ngOnInit(): void {
    this.producto = toSignal(this.productoService.getProductById(this.id()), {
      injector: this.injector,
    });
  }

  inc() {

    if (this.producto()!.qty != 1) {
      this.cantidad++
    }else {
      this.cantidad=1
    }
    
  }
  dec() {
    if (this.producto()!.qty != 1) {
     this.cantidad--
    }
  }
  add(){

    console.log(this.cantidad)
    this.cartService.addProductToCart(this.producto()!, this.cantidad)
  }
}
