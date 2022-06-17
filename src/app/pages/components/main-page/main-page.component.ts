import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CATEGORIES } from '../../models/enums';
import { Product } from '../../models/product';

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
    this.getApiData();
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
  getApiData() {
    this.productsService.getProducts().subscribe((result) => {
      this.products = result;
      console.log(this.products);
      this.filter(CATEGORIES.all);
    });
  }
  toggleMenu(value: boolean) {
    this.menuOpen = value;
  }
}
