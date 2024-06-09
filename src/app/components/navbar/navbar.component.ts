import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  serviceProduct=inject(ProductService)
  search = new FormControl(' ', {nonNullable: true});
  ngOnInit(): void {
    
    this.search.valueChanges.pipe(debounceTime(500),distinctUntilChanged()).
    subscribe(data=>{
      console.log(data)
      this.serviceProduct.searchQuery.set(data)
      
      
    })
  }
}
