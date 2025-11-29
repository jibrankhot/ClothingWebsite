import { Component, Input } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { UtilsService } from '../utils.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.scss'],
  standalone: true,
  imports: [MenuBarComponent, CommonModule]
})
export class MobileSidebarComponent {
  @Input() product_type!: string;

  constructor(public utilsService: UtilsService) { }
}
