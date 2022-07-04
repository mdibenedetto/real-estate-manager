import { Component, OnInit, ViewChild } from '@angular/core';
import { Property } from '../../../../models/property';
import { NgForm } from '@angular/forms';
import { PropertyFilterService } from '../../../../services/property-filter.service';

@Component({
  selector: 'property-filter',
  templateUrl: './property-filter.component.html',
  // styleUrls: ['./property-filter.component.css']
})
export class PropertyFilterComponent implements OnInit {
  filter: Property = {} as any;
  constructor(private propertyFilterService: PropertyFilterService) { }

  ngOnInit() {
    this.filter = this.propertyFilterService.filter;
  }

}
