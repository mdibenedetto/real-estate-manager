import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core/src/metadata/directives';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([{
                path: '',
                pathMatch: 'full',
                redirectTo: 'search'
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]),
    ],
    declarations: [PageNotFoundComponent],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
