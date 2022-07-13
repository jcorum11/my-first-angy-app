import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { CoreModule } from "./core.module";
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';

@NgModule({
  declarations: [
    // all components, directives, and custom pipes
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    // import other modules into this module
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer}),
    ShoppingListModule,
    CoreModule,
  ],
  bootstrap: [AppComponent], // starts your app
})
export class AppModule {}
