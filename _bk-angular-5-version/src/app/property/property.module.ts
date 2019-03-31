import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { PropertySearchComponent } from './property-search/property-search.component';
import { PropertyFilterComponent } from './property-filter/property-filter.component';
import { PropertyDataService } from './service/property-data.service';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PropertyFilterService } from './service/property-filter.service';
import { PropertyResolverService } from './service/property-resolver.service';

const routes: Routes = [{
        path: 'search',
        component: PropertySearchComponent
    },
    {
        path: ':id/detail',
        resolve: { property: PropertyResolverService },
        component: PropertyDetailComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAuptizt9390AVWECoyE1W0FgqC39AosXM'
        })
    ],
    declarations: [
        PropertyFilterComponent,
        PropertySearchComponent,
        PropertyDetailComponent
    ],
    providers: [
        PropertyDataService,
        PropertyFilterService,
        PropertyResolverService
    ],
})
export class PropertyModule {
}
