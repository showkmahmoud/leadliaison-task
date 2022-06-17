import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() header!: string;
  @Input() products!: Product[];
  @Output() syncProductsList: EventEmitter<boolean> = new EventEmitter();
  @Output() syncProduct: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onSyncProductsList() {
    this.syncProductsList.emit(true);
  }
  onSyncProduct(id: number) {
    this.syncProduct.emit(id);
  }
}
