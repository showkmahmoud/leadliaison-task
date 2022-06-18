import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CATEGORIES } from 'src/app/pages/models/enums';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input() header!: string;
  @Input() status!: CATEGORIES;
  @Input() sideMenuItems!: any[];
  @Output() dataFiltered: EventEmitter<CATEGORIES> = new EventEmitter();
  selectedItem: CATEGORIES = CATEGORIES.all;
  constructor() {}

  ngOnInit(): void {
    if (this.status) {
      this.onFilter(this.status);
    }
  }

  onFilter(item: CATEGORIES) {
    this.selectedItem = item;
    this.dataFiltered.emit(this.selectedItem);
  }
}
