import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [MainPageComponent, ProductsListComponent, ProductPageComponent],
  imports: [CommonModule, PagesRoutingModule, CoreModule],
})
export class PagesModule {}
