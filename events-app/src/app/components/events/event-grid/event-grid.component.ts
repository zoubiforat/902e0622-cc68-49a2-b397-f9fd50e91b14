import { Component, OnInit } from '@angular/core';
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
    .subscribe(data => {
      this.events = data;
      console.log(this.events)
    });
  }

}
