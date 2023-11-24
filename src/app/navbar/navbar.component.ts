import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  displaymenu: boolean = false;

  calledmenu() {
    this.displaymenu = !this.displaymenu;
  }

  closeonclick() {
    this.displaymenu = false;
  }
}
