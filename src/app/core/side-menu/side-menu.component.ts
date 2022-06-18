import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PRODUCTS } from 'src/app/pages/components/main-page/main-page.component';
import { CATEGORIES, FILTERED_LIST } from 'src/app/pages/models/enums';
import { Product } from 'src/app/pages/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input() header!: string;
  @Input() status!: CATEGORIES;
  products: Product[] = [];
  @Output() dataFiltered: EventEmitter<CATEGORIES> = new EventEmitter();
  sideMenuItems: any[] = [
    { name: FILTERED_LIST.all, value: CATEGORIES.all },
    { name: FILTERED_LIST.simpleTools, value: CATEGORIES.simple },
    { name: FILTERED_LIST.complexTools, value: CATEGORIES.complex },
  ];
  test = {
    [FILTERED_LIST.all]: CATEGORIES.all,
    [FILTERED_LIST.simpleTools]: CATEGORIES.simple,
    [FILTERED_LIST.complexTools]: CATEGORIES.complex,
  };
  selectedItem: CATEGORIES = CATEGORIES.all;
  itemsNo: number[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    if (this.status) {
      this.onFilter(this.status);
    }
    this.getProducts();
  }

  getProducts() {
    if (localStorage.getItem(PRODUCTS)) {
      this.products = JSON.parse(localStorage.getItem(PRODUCTS) as string);
      this.getProductsNumber();
    }
    // else {
    //   this.getApiData();
    // }
  }
  getApiData() {
    this.productsService.getProducts().subscribe((result) => {
      localStorage.setItem(PRODUCTS, JSON.stringify(result));
      this.products = result;
      this.getProductsNumber();
    });
  }
  getProductsNumber() {}
  onFilter(item: CATEGORIES) {
    this.selectedItem = item;
    this.dataFiltered.emit(this.selectedItem);
  }
}
