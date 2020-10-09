import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import * as cmp from './components/index';
import { MoviesRoutingModule } from './movies-routing.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        cmp.MoviesListComponent,
        cmp.MoviesItemComponent
    ],
    exports: [
        cmp.MoviesListComponent,
        cmp.MoviesItemComponent
    ],
    imports: [
        MoviesRoutingModule,
        MatListModule,
        CommonModule,
        MatCardModule
    ]
})
export class MoviesModule { }
