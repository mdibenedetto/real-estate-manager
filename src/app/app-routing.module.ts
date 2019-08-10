import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common'; 

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [PageNotFoundComponent],
    exports: [RouterModule]
})
export class AppRoutingModule {

}