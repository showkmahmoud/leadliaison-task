import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CATEGORIES } from 'src/app/pages/models/enums';
import { Product } from 'src/app/pages/models/product';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input() header!: string;
  @Input() products!: Product[];
  @Output() dataFiltered: EventEmitter<CATEGORIES> = new EventEmitter();

  sideMenuItems: CATEGORIES[] = [
    CATEGORIES.all,
    CATEGORIES.simpleTools,
    CATEGORIES.complexTools,
  ];
  selectedItem: CATEGORIES = CATEGORIES.all;
  constructor() {}

  ngOnInit(): void {
    this.onFilter(this.selectedItem);
  }
  onFilter(item: CATEGORIES) {
    this.selectedItem = item;
    this.dataFiltered.emit(this.selectedItem);
  }
}
