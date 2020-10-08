import { NgModule } from '@angular/core';
import { BooksRoutingModule } from './books-routing.module';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import * as cmp from './components/index';
@NgModule({
    declarations: [
        cmp.BookListComponent,
        cmp.BookItemComponent
    ],
    exports: [
        cmp.BookListComponent,
        cmp.BookItemComponent
    ],
    imports: [
        BooksRoutingModule,
        MatListModule,
        CommonModule
    ]
})
export class BooksModule { }
