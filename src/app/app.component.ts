import { Component } from '@angular/core';
import sidebarData from './datas/sidebarData';
import { ISidebarItem } from './models/sidebarItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simple-english';

  sidebarData: ISidebarItem[] = sidebarData;
}
