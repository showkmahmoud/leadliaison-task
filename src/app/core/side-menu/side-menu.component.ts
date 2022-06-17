import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CATEGORIES } from 'src/app/pages/models/enums';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input() header!: string;
  sideMenuItems: CATEGORIES[] = [
    CATEGORIES.all,
    CATEGORIES.simpleTools,
    CATEGORIES.complexTools,
  ];
  constructor() {}

  ngOnInit(): void {}
}
