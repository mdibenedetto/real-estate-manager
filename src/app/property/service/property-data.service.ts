import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";



import { Property, RootObject } from '../property';

@Injectable()
export class PropertyDataService {

    constructor(private http: HttpClient) {}

    getDatas(topRow: number = 0, filter: Property = null): Observable < RootObject[] > {
        let getDatas$ = this.http.get < any > ('/properties');
        getDatas$ = getDatas$.pipe(map(x => x.default));

        let propsFiltered = getDatas$;

        if (topRow > 0) {
            propsFiltered = getDatas$.pipe(
                map((properties) => properties.slice(0, topRow))
            );
        }

        if (filter && Object.keys(filter).length > 0) {
            propsFiltered = getDatas$;

            const filterString = keyProperty => {
                if (filter[keyProperty]) {
                    propsFiltered = propsFiltered.pipe(
                        map((props: RootObject[]) =>
                            props.filter(x => x.property[keyProperty].search(new RegExp(filter[keyProperty], 'i')) > -1)
                        )
                    );
                }
            };
            const filterNumeric = keyProperty => {
                if (filter[keyProperty]) {
                    propsFiltered = propsFiltered.pipe(
                        map((props: RootObject[]) =>
                            props.filter(x => x.property[keyProperty] >= filter[keyProperty])
                        )
                    );
                }
            };
            filterString('address');
            filterString('zipCode');
            filterNumeric('beds');
            filterNumeric('price');
        }
        return propsFiltered || getDatas$;
    }

    findProperty(id: Number): Observable < RootObject > {
        let datas = this.getDatas();
        return datas.pipe(
            mergeMap((x: RootObject[]) => x.filter(root => root.property.id === id))
        );
    }
}