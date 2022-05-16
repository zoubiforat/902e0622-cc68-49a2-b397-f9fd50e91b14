import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchInput: string = '';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  performSearch(): void {
    this.searchService.updateSearchInput(this.searchInput);
  }

}
