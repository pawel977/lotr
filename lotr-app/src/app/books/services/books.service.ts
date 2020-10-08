import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as httpConfig from '../../app-http-config';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly booksGetUrl = httpConfig.http.baseUrl + httpConfig.http.book.get;
  private bookList$: BehaviorSubject<any> = new BehaviorSubject([]);
  private choosenBookChapters$: BehaviorSubject<any> = new BehaviorSubject([]);
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
    const url = '' + this.booksGetUrl + `/${id}/chapter`
    this.http.get(url).subscribe((e: any) => e && e.docs && this.choosenBookChapters$.next(e.docs))

  }
  public getAllChoosenBookChapter() {
    return this.choosenBookChapters$;
  }
}
