import { ProductsService } from './../../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() header!: string;
  @Input() products!: Product[];

  constructor() {}

  ngOnInit(): void {}
  onSyncProductsList() {}
  onSyncProduct() {}
}
