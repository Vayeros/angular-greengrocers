import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-total',
  templateUrl: './item-total.component.html',
  styleUrls: ['./item-total.component.css']
})
export class ItemTotalComponent {
  constructor(private itemService: ItemService) {}

  get totalPrice(): number {
    return this.itemService.calculateTotal()
  }
}
