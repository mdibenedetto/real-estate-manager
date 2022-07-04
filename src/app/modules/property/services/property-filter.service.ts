import { Injectable } from '@angular/core';
import { Property } from '../models/property';

@Injectable()
export class PropertyFilterService {
  filter: Property = {} as Property;

  hasFilter(): boolean {
    let res = Object.values(this.filter).some((value) => value);
    return res;
  }
}
