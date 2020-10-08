import { NgModule } from '@angular/core';
import { BooksRoutingModule } from './books-routing.module';
import * as cmp from './components/index';
@NgModule({
    declarations: [
    cmp.BookListComponent
],
    exports: [
    ],
    imports: [
        BooksRoutingModule
    ]
})
export class BooksModule { }
