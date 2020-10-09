import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseEntity } from 'src/app/interfaces/base-entity.interface';
import { Chapter } from 'src/app/interfaces/chapter.interface';
import { SuccessResponse } from 'src/app/interfaces/success-response.interface';
import * as httpConfig from '../../app-http-config';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  readonly booksGetUrl = httpConfig.http.baseUrl + httpConfig.http.book.get;
  private bookList$: BehaviorSubject<BaseEntity[]> = new BehaviorSubject([]);
  private choosenBookChapters$: BehaviorSubject<Chapter[]> = new BehaviorSubject([]);
  constructor(private http: HttpClient) { }

  public callBookList(): void {
    this.http.get<SuccessResponse<BaseEntity[]>>(this.booksGetUrl)
      .subscribe((e: SuccessResponse<BaseEntity[]>) => {
        this.bookList$.next(e && e.docs);
      });
  }

  public CallChosenBookInformation(id: number): void {
    const header = {
      headers: new HttpHeaders().set('Authorization', `Basic ${btoa('RYVTyTMrrCgRNG0nB5Up')}`)
    }

    const url = '' + this.booksGetUrl + `/${id}/chapter`
    this.http.get<SuccessResponse<Chapter[]>>(url, header)
    .subscribe((e: SuccessResponse<Chapter[]>) => e && e.docs && this.choosenBookChapters$.next(e.docs))

  }

  public getAllBooksList(): BehaviorSubject<BaseEntity[]> {
    return this.bookList$;
  }


  public getAllChoosenBookChapter(): BehaviorSubject<Chapter[]> {
    return this.choosenBookChapters$;
  }
}
