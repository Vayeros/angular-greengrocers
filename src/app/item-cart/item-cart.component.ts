import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent {
  constructor(private itemService: ItemService) {}

  get cartItems(): Item[] {
    return this.itemService.cart
  }

  increaseQuantity(item: Item) {
    item.quantity++
  }

  decreaseQuantity(item: Item) {
    if (item.quantity >= 1) {
      item.quantity--
    }
    if (item.quantity === 0) {
      this.itemService.removeFromCart(item)
    }
  }
}
