import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
import * as rx from 'rxjs';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  constructor(public booksSrv: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getIdOfBook()
  }

  private getIdOfBook() {
    this.route.queryParams.subscribe(params => console.log(params))
  }

}
