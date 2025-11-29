import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CartSidebarComponent {

  constructor(public cartService: CartService) { }

}
