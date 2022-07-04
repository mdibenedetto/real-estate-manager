import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/property';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  latitude: Number = 51.5074;
  longitude: Number = 0.1278;
  property: Property = {} as Property;
  urlMap: SafeUrl = {};

  constructor(private root: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.property = this.root.snapshot.data['property'];

    if (this.property.location.length > 1) {
      this.longitude = this.property.location[0];
      this.latitude = this.property.location[1];

      const url =
        `https://maps.google.com/maps`
        + `?width=100%`
        + `&height=600`
        + `&hl=en`
        + `&q=${this.latitude},${this.longitude}`
        + `&ie=UTF8`
        + `&t=`
        + `&z=14`
        + `&iwloc=B`
        + `&output=embed`
        ;

      this.urlMap = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    }
  }
}
