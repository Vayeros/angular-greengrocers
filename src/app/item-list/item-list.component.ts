import { Component } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  constructor(private readonly itemService: ItemService) {}

  items: Promise<Item[]> = this.getItems()
  filteredItems: Promise<Item[]> = this.items
  filter: string = 'all'

  async getItems(): Promise<Item[]> {
    return this.itemService.getItems()
  }

  async filterItems() {
    if (this.filter === 'all') {
      this.filteredItems = this.items
    } else {
      const allItems = await this.items
      this.filteredItems = Promise.resolve(allItems.filter(item => item.type === this.filter))
    }
  }
}
