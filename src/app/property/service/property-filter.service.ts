import { Injectable } from '@angular/core';
import { Property } from '../property';

@Injectable()
export class PropertyFilterService {
    filter: Property = {} as any;

    hasFilter(): Boolean {
        let res = false;
        Object.keys(this.filter).forEach(key => {
            if (this.filter[key]) {
                res = true;
                return true;
            }
        });
        return res;
    }
}
