import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Item } from "../models/item";
import { firstValueFrom } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ItemService {
    url = `https://boolean-api-server.fly.dev/groceries`
    http = inject(HttpClient)
    cart: Item[] = []


    items: Promise<Item[]> = Promise.resolve(this.getItems())

    async getItems(): Promise<Item[]> {
        const result = await firstValueFrom(this.http.get<Item[]>(`${this.url}`))
        return result
    }

    addToCart(item: Item) {
        item.quantity = 1
        this.cart.push(item)
    }

    removeFromCart(item: Item) {
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id)
    }

    calculateTotal(): number {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
}