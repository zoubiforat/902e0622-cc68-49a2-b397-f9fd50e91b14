import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Event } from 'src/app/shared/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartEvents: Event[] = []
  private eventsList = new BehaviorSubject<Event[]>([]);

  constructor() { }

  getEventsInCart(): Observable<Event[]> {
    return this.eventsList.asObservable();
  }

  isProductInCart(event: Event): boolean {
    return this.cartEvents.some(e => e._id === event._id);
  }

  addEventToCart(event: Event): void {
    if(!this.isProductInCart(event)) {
      this.cartEvents.push(event);
      this.eventsList.next(this.cartEvents);
    }
  }

  removeEventfromCart(event: Event): void {
    const eventIndex = this.cartEvents.findIndex(e => e._id === event._id);
    if(eventIndex > -1) {
      this.cartEvents.splice(eventIndex, 1);
      this.eventsList.next(this.cartEvents);
    }
  }
}
