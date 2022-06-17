import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CATEGORIES, FILTERED_LIST } from 'src/app/pages/models/enums';
import { Product } from 'src/app/pages/models/product';

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
  itemsNo: number = 0;
  constructor() {}

  ngOnInit(): void {
    if (this.status) {
      this.onFilter(this.status);
    }
  }
  getProducts() {
    this.products.filter((product) => {
      if (product.category === this.test[FILTERED_LIST.all]) {
        this.itemsNo = this.products.length;
      }
    });
  }
  onFilter(item: CATEGORIES) {
    this.selectedItem = item;
    this.dataFiltered.emit(this.selectedItem);
  }
}
