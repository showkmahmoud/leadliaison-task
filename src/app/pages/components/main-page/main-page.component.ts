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
  constructor(private productsService: ProductsService) {
    this.getApiData();
  }

  ngOnInit(): void {}
  filter(category: CATEGORIES) {
    if (category === CATEGORIES.all) {
      this.filteredProducts = this.products;
    } else if (category === CATEGORIES.simple) {
      this.filteredProducts = this.products.filter(
        (product) => product.category === category
      );
    } else if (category === CATEGORIES.complex) {
      this.filteredProducts = this.products.filter(
        (product) => product.category === category
      );
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
