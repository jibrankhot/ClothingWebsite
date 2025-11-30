import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeaderComponent],
  standalone: true
})
export class HomeComponent {
  @Input() style_2: Boolean | undefined;
  @Input() primary_style: Boolean | undefined;
  @Input() style_3: Boolean | undefined;
}
