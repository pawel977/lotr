import { NgModule } from '@angular/core';
import * as cmp from './components/index';
import { MainRoutingModule } from './main-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    declarations: [
        cmp.MainContentComponent,
        cmp.PageNotFoundComponent,
        cmp.HomeComponent
    ],
    exports: [
        cmp.MainContentComponent,
        cmp.PageNotFoundComponent,
        cmp.HomeComponent
    ],
    imports: [
        MainRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule
    ]})
export class MainModule { }
