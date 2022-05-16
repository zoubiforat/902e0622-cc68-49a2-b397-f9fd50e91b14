import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchInput: string = '';
  private searchInputBehavior = new BehaviorSubject<string>('');

  constructor() { }

  getSearchInput(): Observable<string> {
    return this.searchInputBehavior.asObservable();
  }

  updateSearchInput(text: string) {
    this.searchInput = text;
    this.searchInputBehavior.next(this.searchInput);
  }
}
