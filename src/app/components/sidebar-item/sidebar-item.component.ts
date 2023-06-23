import { Component, Input } from '@angular/core';
import { ISidebarItem } from 'src/app/models/sidebarItem';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent {
  @Input() sidebarItem!: ISidebarItem;
}
