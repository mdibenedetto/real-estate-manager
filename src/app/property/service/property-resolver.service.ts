import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Property } from '../property';
import { PropertyDataService } from './property-data.service';

@Injectable()
export class PropertyResolverService implements Resolve < Property > {

    constructor(private propertyDataService: PropertyDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable < Property > {
        const id = route.params['id'];
        return this.propertyDataService.findProperty(+id)
            .map(x => x.property);
    }
}
