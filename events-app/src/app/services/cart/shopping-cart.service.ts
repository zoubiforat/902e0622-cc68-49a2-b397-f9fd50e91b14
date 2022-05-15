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

  addEventToCart(event: Event): void {
    if(!this.cartEvents.some(e => e._id === event._id)) {
      this.cartEvents.push(event);
      this.eventsList.next(this.cartEvents);
    }
  }
}
