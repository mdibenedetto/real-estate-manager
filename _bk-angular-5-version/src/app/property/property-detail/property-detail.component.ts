import { Component, OnInit } from '@angular/core';
import { Property } from '../property';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-property-detail',
    templateUrl: './property-detail.component.html',
    styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
    property: Property;
    latitude: Number = 51.5074;
    longitude: Number = 0.1278;

    constructor(private root: ActivatedRoute) {}

    ngOnInit() {
        this.property = this.root.snapshot.data['property'];

        if (this.property.location.length > 1) {
            this.latitude = this.property.location[1];
            this.longitude = this.property.location[0];
        }
    }
}
