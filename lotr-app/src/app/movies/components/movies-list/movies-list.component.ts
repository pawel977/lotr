import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(public movieSrv: MoviesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieSrv.callMovieList();
  }

  public navigateToDetails(id: number) {
    this.router.navigate(['details'], {
      queryParams: { id: id },
      relativeTo: this.route
    })
  }

}
