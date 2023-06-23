import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss'],
})
export class AppToolbarComponent {
  @Output() toggleMenuEvent = new EventEmitter<void>();

  public toggleMenu() {
    this.toggleMenuEvent.emit();
  }
}
