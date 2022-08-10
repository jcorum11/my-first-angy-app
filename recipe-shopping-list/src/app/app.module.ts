import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CoreModule } from "./core.module";
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer'

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
    StoreModule.forRoot(fromApp.appReducer),
    CoreModule,
  ],
  bootstrap: [AppComponent], // starts your app
})
export class AppModule {}
