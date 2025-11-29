import { Component, Input } from '@angular/core';
import { FashionHeaderComponent } from '../shared/header/fashionHeaderComponent/fashionheadercomponent';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [FashionHeaderComponent, FooterComponent],
  standalone: true
})
export class HomeComponent {
  @Input() style_2: Boolean | undefined;
  @Input() primary_style: Boolean | undefined;
  @Input() style_3: Boolean | undefined;
}
