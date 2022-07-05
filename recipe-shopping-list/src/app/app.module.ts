import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { AppRoutingModule } from "./app-routing.module";
import { RecipeService } from "./recipes/recipe.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipesModule } from "./recipes/recipes.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    // all components, directives, and custom pipes
    AppComponent,
    HeaderComponent,
    AuthComponent,
  ],
  imports: [
    // import other modules into this module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
  ],
  providers: [
    // all services we want to provide (can also use "providedIn")
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent], // starts your app
})
export class AppModule {}
