import { Component, OnInit } from '@angular/core';
import { filter, map, tap } from 'rxjs';
import { EventService } from 'src/app/services/events/event.service';
import { Event } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event-grid',
  templateUrl: './event-grid.component.html',
  styleUrls: ['./event-grid.component.css']
})
export class EventGridComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents()
    .pipe(map(events => events.filter(event => event.date && event.startTime && event.endTime)))
    .subscribe(data => {
      this.events = data;
      console.log(this.events)
    });
  }

}
