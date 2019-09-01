import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GroceryComponent } from "./grocery/grocery.component";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, GroceryComponent],
  imports: [BrowserModule, AppRoutingModule,  FormsModule],
  providers: [],
  bootstrap: [AppComponent, GroceryComponent]
})
export class AppModule {}
