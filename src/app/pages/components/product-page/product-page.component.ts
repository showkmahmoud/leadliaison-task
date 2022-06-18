import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { PRODUCTS } from '../main-page/main-page.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  productId!: string;
  product!: Product | undefined;
  object = Object;
  constructor(private route: Router) {}

  ngOnInit(): void {
    const url = this.route.url;
    this.productId = url.split('/')[3];
    this.getProduct();
  }
  getProduct() {
    const products = JSON.parse(localStorage.getItem(PRODUCTS) as string);
    this.product = products.find(
      (item: Product) => item.id === Number(this.productId)
    );
  }
}
