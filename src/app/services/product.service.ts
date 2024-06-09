import { Injectable, computed, inject, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  apiURL = 'https://fakestoreapi.com';
  searchQuery = signal<string>('');
  productos$ = signal<Product[]>([]);
  http = inject(HttpClient);

  listFiltered = computed(() => {
    const filter = this.searchQuery();
    this.http
      .get<Product[]>(`${this.apiURL}/products/?sort=desc`)
      .pipe(
        map((products: Product[]) =>
          products.map((product: Product) => ({ ...product, qty: 1 }))
        )
      )
      .subscribe((data) => {
        const filtracion = data.filter((data) =>
          data.title?.includes(this.searchQuery())
        );
        this.productos$.set(
          data.filter((data) =>
            data.title?.toLowerCase()
              .includes(this.searchQuery().toLowerCase())
          )
        );
      });
    return this.productos$();
  });
}
