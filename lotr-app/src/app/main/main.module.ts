import { NgModule } from '@angular/core';
import * as cmp from './components/index';
import { MainRoutingModule } from './main-routing.module';
@NgModule({
    declarations: [
        cmp.HeaderComponent,
        cmp.MainContentComponent,
        cmp.FooterComponent,
        cmp.PageNotFoundComponent,
        cmp.HomeComponent
    ],
    exports: [
        cmp.HeaderComponent,
        cmp.MainContentComponent,
        cmp.FooterComponent,
        cmp.PageNotFoundComponent,
        cmp.HomeComponent
    ],
    imports: [
        MainRoutingModule
    ]})
export class MainModule { }
