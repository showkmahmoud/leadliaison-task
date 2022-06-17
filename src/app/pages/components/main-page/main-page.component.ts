import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  mainHeader: string = 'Products';
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getApiData();
  }
  getApiData() {
    this.productsService.getProducts().subscribe((result) => {
      console.log(result);
    });
  }
}
