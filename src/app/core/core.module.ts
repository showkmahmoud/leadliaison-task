import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
