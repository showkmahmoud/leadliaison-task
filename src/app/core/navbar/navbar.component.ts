import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  sideMenuOpen: boolean = true;
  @Output() menuOpened: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onOpenMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
    this.menuOpened.emit(this.sideMenuOpen);
    console.log('fired');
  }
}
