import { Component, OnInit } from '@angular/core';

import { PropertyDataService } from '../../services/property-data.service';
import { Property } from '../../models/property';
import { PropertyFilterService } from '../../services/property-filter.service';

@Component({
  selector: 'property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {

  showFilter: boolean = false;
  totalsMessage: String = '';
  properties: Property[] = [];

  constructor(
    private propertyDataService: PropertyDataService,
    private propertyFilterService: PropertyFilterService
  ) { }

  ngOnInit(): void {
    this.search(20);
  }
  hasFilter(): boolean {
    debugger
    return this.propertyFilterService.hasFilter();
  }

  search(topRow: number = 0) {
    const { filter } = this.propertyFilterService;

    this.propertyDataService
      .getDatas(topRow, filter)
      .subscribe({
        next:
          (res) => {
            this.properties = res.map(x => x.property);
            this.totalsMessage = topRow === 0 ?
              `${this.properties.length} total properties found!` :
              `${this.properties.length} new properties in London`;
          },
        error: error => {
          console.error(`Error Server: ${error.message}`);
        }
      });
  }

}
