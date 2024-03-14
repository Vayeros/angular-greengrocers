import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ItemItemComponent } from "./item-item/item-item.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { ItemCartComponent } from "./item-cart/item-cart.component";
import { ItemTotalComponent } from "./item-total/item-total.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ItemItemComponent, ItemListComponent, ItemCartComponent, ItemTotalComponent],
    imports: [CommonModule, HttpClientModule, FormsModule],
    exports: [ItemItemComponent, ItemListComponent, ItemCartComponent, ItemTotalComponent]
})

export class ItemModule {}