import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit {
  public details$: BehaviorSubject<Movie> = new BehaviorSubject<Movie>(null)

  constructor(private route: ActivatedRoute, public movieSrv: MoviesService) { }

  ngOnInit(): void {
    this.getIdOfMovieAndCallService();
    this.details$ = this.movieSrv.getMovieDetails();
  }

  private getIdOfMovieAndCallService(): void {
    this.route.queryParams.subscribe(params => this.movieSrv.CallChosenMovieInformation(params.id))
  }

}
