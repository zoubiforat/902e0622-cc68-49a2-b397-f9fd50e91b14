import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Event } from 'src/app/shared/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private server_url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.server_url}/events/uk/london`);
  }

}
