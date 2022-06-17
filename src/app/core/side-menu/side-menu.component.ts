import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CATEGORIES, FILTERED_LIST } from 'src/app/pages/models/enums';
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

  sideMenuItems: any[] = [
    { name: FILTERED_LIST.all, value: CATEGORIES.all },
    { name: FILTERED_LIST.simpleTools, value: CATEGORIES.simple },
    { name: FILTERED_LIST.complexTools, value: CATEGORIES.complex },
  ];

  selectedItem: CATEGORIES = CATEGORIES.all;
  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {}
  onFilter(item: CATEGORIES) {
    this.selectedItem = item;
    this.dataFiltered.emit(this.selectedItem);
    this.changeDetector.detectChanges();
  }
}
