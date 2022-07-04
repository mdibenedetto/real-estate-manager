import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// local
import { PropertyDataService } from './services/property-data.service';
import { PropertyFilterService } from './services/property-filter.service';
import { PropertyResolverService } from './resolvers/property-resolver.service';
// pages
import { PropertySearchComponent } from './pages/property-search/property-search.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
// components
import { PropertyFilterComponent } from './pages/property-search/components/property-filter/property-filter.component';
import { PropertyToolBarComponent } from './pages/property-search/components/property-tool-bar/property-tool-bar.component';
import { PropertyListComponent } from './pages/property-search/components/property-list/property-list.component';

const routes: Routes = [{
  path: 'search',
  component: PropertySearchComponent
},
{
  path: ':id/detail',
  resolve: {
    property: PropertyResolverService
  },
  component: PropertyDetailComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PropertyFilterComponent,
    PropertySearchComponent,
    PropertyDetailComponent,
    PropertyToolBarComponent,
    PropertyListComponent
  ],
  providers: [
    PropertyDataService,
    PropertyFilterService,
    PropertyResolverService
  ],
})
export class PropertyModule {
}
