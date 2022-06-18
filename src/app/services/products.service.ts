import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'https://captello.firebaseio.com/products.json';
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<any> {
    return this.httpClient.get(this.productsUrl);
  }
  getProduct(id: number): Observable<any> {
    return this.httpClient.get(
      `https://captello.firebaseio.com/products/${id}.json`
    );
  }
}
