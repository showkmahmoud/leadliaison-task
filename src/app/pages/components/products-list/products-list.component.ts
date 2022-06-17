import { ProductsService } from './../../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() header!: string;
  constructor() {}

  ngOnInit(): void {}
}
