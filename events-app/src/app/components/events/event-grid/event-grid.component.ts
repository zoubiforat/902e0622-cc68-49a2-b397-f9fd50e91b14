import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { EventService } from 'src/app/services/events/event.service';
import { DateEvents } from 'src/app/shared/models/date-events.model';
import { whichEventComesFirst } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event-grid',
  templateUrl: './event-grid.component.html',
  styleUrls: ['./event-grid.component.scss']
})
export class EventGridComponent implements OnInit {

  @Input() eventsByDate: DateEvents[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }
}
