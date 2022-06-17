import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CATEGORIES } from '../../models/enums';
import { Product } from '../../models/product';
export const PRODUCTS = 'PRODUCTS';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  mainHeader: string = 'Products';
  menuOpen: boolean = true;
  products!: Product[];
  filteredProducts: Product[] = [];
  status!: CATEGORIES;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  filter(category: CATEGORIES) {
    if (category === CATEGORIES.all) {
      this.filteredProducts = this.products;
      this.status = CATEGORIES.all;
    } else if (category === CATEGORIES.simple) {
      this.filteredProducts = this.products.filter(
        (product) => product.category === category
      );
      this.status = CATEGORIES.simple;
    } else if (category === CATEGORIES.complex) {
      this.filteredProducts = this.products.filter(
        (product) => product.category === category
      );
      this.status = CATEGORIES.complex;
    }
  }
  getProducts() {
    if (localStorage.getItem(PRODUCTS)) {
      this.products = JSON.parse(localStorage.getItem(PRODUCTS) as string);
      this.filter(this.status ? this.status : CATEGORIES.all);
    } else {
      this.getApiData();
    }
  }
  getApiData() {
    this.productsService.getProducts().subscribe((result) => {
      localStorage.setItem(PRODUCTS, JSON.stringify(result));
      this.products = result;
      this.filter(this.status ? this.status : CATEGORIES.all);
    });
  }
  onListSynced() {
    this.getApiData();
  }
  onProductSynced(id: number) {
    this.productsService.getProduct(id).subscribe((result) => {
      this.onProductUpdate(result);
    });
  }
  onProductUpdate(product: Product) {
    if (product) {
      let newList = this.products.filter((item) => item.id !== product.id);
      newList.push(product);
      localStorage.setItem(PRODUCTS, JSON.stringify(newList));
      this.products = newList;
    } else {
      console.error('the product not found');
    }
  }
  toggleMenu(value: boolean) {
    this.menuOpen = value;
  }
}
