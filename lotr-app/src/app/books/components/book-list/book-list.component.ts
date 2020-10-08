import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(public booksrv: BooksService, private router: Router, private route: ActivatedRoute) {
    this.getBooksList();
   }

  ngOnInit(): void {
  }

  public navigateToDetails(id: number) {
    this.router.navigate(['details'], {
      queryParams: {id: id},
      relativeTo: this.route
    })
  }
  
  private getBooksList() {
    this.booksrv.callBookList();
  }

}
