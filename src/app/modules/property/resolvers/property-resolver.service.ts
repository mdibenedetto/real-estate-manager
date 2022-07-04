import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';

import { Property } from '../models/property';
import { PropertyDataService } from '../services/property-data.service';

@Injectable()
export class PropertyResolverService implements Resolve<Property> {

  constructor(private propertyDataService: PropertyDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property> {
    const id = route.params['id'];
    return this.propertyDataService.findProperty(+id)
      .pipe(
        map(x => x.property)
      );
  }
}
