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

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventGridComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
