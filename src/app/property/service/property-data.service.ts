import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, mergeMap, filter, tap } from 'rxjs/operators'

import { Property, RootObject } from '../property';

@Injectable()
export class PropertyDataService {

    constructor(private http: HttpClient) {}

    getDatas(topRow: number = 0, filter: Property = null): Observable < RootObject[] > {
        const _getDatas$ = this.http.get < any > ('/properties');
        let getDatas$ = _getDatas$.pipe(map(array => array.default));
        let propsFiltered = getDatas$;

        if (topRow > 0) {
            propsFiltered = getDatas$.pipe(
                map(array => {
                    return array.slice(0, topRow);
                })
            );
        }

        if (filter && Object.keys(filter).length > 0) {
            propsFiltered = getDatas$;

            const filterString = keyProperty => {
                if (filter[keyProperty]) {
                    propsFiltered = propsFiltered.pipe(
                        map(props =>
                            props.filter(x => x.property[keyProperty]
                                .search(new RegExp(filter[keyProperty], 'i')) > -1)
                        ));
                }
            };

            const filterNumeric = keyProperty => {
                if (filter[keyProperty]) {
                    propsFiltered = propsFiltered.pipe(
                        map(props =>
                            props
                            .filter(x => x.property[keyProperty] >= filter[keyProperty])

                        )
                    )
                }
            };
            filterString('address');
            filterString('zipCode');
            filterNumeric('beds');
            filterNumeric('price');
        }
        return propsFiltered;
    }

    findProperty(id: Number): Observable < RootObject > {
        return this.getDatas().pipe(
            mergeMap(x => x.filter(root => root.property.id === id))
        );
    }
}