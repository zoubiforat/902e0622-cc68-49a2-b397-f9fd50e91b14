import { Component, OnInit } from '@angular/core';
import { MatOptgroup } from '@angular/material/core';
import { filter, map, tap } from 'rxjs';
import { EventService } from 'src/app/services/events/event.service';
import { DateEvents } from 'src/app/shared/models/date-events.model';
import { Event, whichEventComesFirst } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event-grid',
  templateUrl: './event-grid.component.html',
  styleUrls: ['./event-grid.component.css']
})
export class EventGridComponent implements OnInit {

  eventsByDate: DateEvents[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents()
    .pipe(
      map(events => events.filter(event => event.date && event.startTime && event.endTime)),
      map(events => {
        let dateEvents = new Map<string, DateEvents>();
        events.forEach(event => {
          if(dateEvents.has(event.date)) {
            dateEvents.get(event.date)?.events.push(event);
          } else {
            dateEvents.set(event.date, { date: event.date, events: [event] });
          }
        });
        return Array.from(dateEvents.values());
      }),
      map(dateEvents => dateEvents.sort((dateEvents1, dateEvents2) => dateEvents1.date.localeCompare(dateEvents2.date))),
      map(dateEvents => {
        dateEvents.forEach(dateEvents => dateEvents.events.sort((event1, event2) => whichEventComesFirst(event1, event2)));
        return dateEvents;
      })
      // map(events => events.sort((event1, event2) => whichEventComesFirst)),
      )
    .subscribe(data => {
      this.eventsByDate = data;
      console.log(this.eventsByDate)
    });
  }

}
