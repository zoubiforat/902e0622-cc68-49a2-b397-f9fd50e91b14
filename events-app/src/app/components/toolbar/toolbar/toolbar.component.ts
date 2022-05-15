import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/cart/shopping-cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  cartCount: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getEventsInCart()
    .subscribe(data => {
      this.cartCount = data.length;
    });
  }

}
