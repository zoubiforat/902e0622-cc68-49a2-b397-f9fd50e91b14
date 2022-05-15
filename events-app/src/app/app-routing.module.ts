import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartListComponent } from './components/cart/shopping-cart-list/shopping-cart-list.component';
import { AllEventsComponent } from './components/events/all-events/all-events.component';

const routes: Routes = [
  { path: 'events', component: AllEventsComponent},
  { path: 'shoppingCart', component: ShoppingCartListComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: 'events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
