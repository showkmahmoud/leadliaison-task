import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { PRODUCTS } from '../main-page/main-page.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}
  getProduct(id: number) {
    this.productsService.getProduct(id).subscribe((result) => {
      console.log(result);
    });
    const products = JSON.parse(localStorage.getItem(PRODUCTS) as string);
  }
}
