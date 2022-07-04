import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'search'
},
{
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
