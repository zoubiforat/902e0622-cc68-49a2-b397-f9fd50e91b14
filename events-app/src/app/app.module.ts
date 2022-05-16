import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { EventComponent } from './components/events/event/event.component';
import { EventGridComponent } from './components/events/event-grid/event-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar/toolbar.component';
import { ShoppingCartListComponent } from './components/cart/shopping-cart-list/shopping-cart-list.component';
import { AllEventsComponent } from './components/events/all-events/all-events.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventGridComponent,
    ToolbarComponent,
    ShoppingCartListComponent,
    AllEventsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
