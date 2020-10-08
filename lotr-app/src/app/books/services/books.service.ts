import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as httpConfig from '../../app-http-config';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly booksGetUrl = httpConfig.http.baseUrl + httpConfig.http.book.get;
  private bookList$: Subject<any> = new Subject();
  private choosenBook: Subject<any> = new Subject();
  constructor(private http: HttpClient) { }

  public callBookList() {
    this.http.get(this.booksGetUrl).subscribe((e: any) => {
     this.bookList$.next(e && e.docs);
      console.log('e', e)
    });
  }

  public getAllBooksList() {
    return this.bookList$;
  }

  public CallChosenBookInformation(id: number) {
    const url = '' + this.booksGetUrl + `/${id}`
    this.http.get(url).subscribe(e => console.log('e1', e))

  }
}
