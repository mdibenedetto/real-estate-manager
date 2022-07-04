import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/modules/property/models/property';

@Component({
  selector: 'property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  @Input() properties: Property[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
