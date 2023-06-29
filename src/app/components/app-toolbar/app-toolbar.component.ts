import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss'],
})
export class AppToolbarComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  public toggleMenu() {
    this.toggleMenuEvent.emit();
  }

  public openLoginDialog(): void {
    let refDialog = this.dialog.open(LoginComponent);
  }
}
