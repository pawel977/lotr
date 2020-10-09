import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Movie } from 'src/app/interfaces/movie.interface';
import { SuccessResponse } from 'src/app/interfaces/success-response.interface';
import * as httpConfig from '../../app-http-config';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  readonly moviesGetUrl = httpConfig.http.baseUrl + httpConfig.http.movie.get;
  private MovieList$: BehaviorSubject<Movie[]> = new BehaviorSubject([]);
  private movieDetails$: BehaviorSubject<any> = new BehaviorSubject([])
  constructor(private http: HttpClient) { }

  public callMovieList(): void {
    this.http.get<SuccessResponse<Movie[]>>(this.moviesGetUrl, this.setHeaders())
      .subscribe((e: any) => {
        this.MovieList$.next(e && e.docs);
      });
  }

  public CallChosenMovieInformation(id: number): void {
    const url = '' + this.moviesGetUrl + `/${id}`;
    this.http.get<SuccessResponse<Movie[]>>(url, this.setHeaders()).subscribe(
      (e: any) => e && e.docs && this.movieDetails$.next(e.docs[0])
      );
  }

  public getMovieDetails(): BehaviorSubject<Movie> {
    return this.movieDetails$;
  }


  public getAllMoviesList(): BehaviorSubject<Movie[]> {
    return this.MovieList$;
  }

  private setHeaders(): any {
    const header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${'RYVTyTMrrCgRNG0nB5Up'}`)
    }
    return header;
  }
}
