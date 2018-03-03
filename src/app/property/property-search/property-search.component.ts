import { Component, OnInit } from '@angular/core';

import { PropertyDataService } from '../service/property-data.service';
import { Property } from '../property';
import { PropertyFilterService } from '../service/property-filter.service';
import { PropertyFilterComponent } from '../property-filter/property-filter.component';

@Component({
    selector: 'property-search',
    templateUrl: './property-search.component.html',
    styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {
    properties: Property[];
    showFilter: Boolean = false;
    totalsMessage: String = '';

    constructor(
        private propertyDataService: PropertyDataService,
        private propertyFilterService: PropertyFilterService) {}

    ngOnInit(): void {
        this.search(20);
    }
    hasFilter(): Boolean {
        return this.propertyFilterService.hasFilter();
    }
    search(topRow: number = 0) {
        const { filter } = this.propertyFilterService;

        this.propertyDataService
            .getDatas(topRow, filter)
            .subscribe(res => {
                    this.properties = res.map(x => x.property);
                    this.totalsMessage = topRow === 0 ?
                        `${this.properties.length} total properties found!` :
                        `${this.properties.length} new properties in London`;
                },
                error => {
                    console.error(`Error Server: ${error.message}`);
                });
    }

}
