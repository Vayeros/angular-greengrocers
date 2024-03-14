import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemModule } from './item-module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ItemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
