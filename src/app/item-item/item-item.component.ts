import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-item',
  templateUrl: './item-item.component.html',
  styleUrls: ['./item-item.component.css']
})

export class ItemItemComponent {
  @Input('item') item: Item | null = null

  constructor(private itemService: ItemService) {}

  addToCart() {
    if (this.item) {
      this.itemService.addToCart(this.item)
    }
  }
}
