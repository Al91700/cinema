import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchOffline } from '@ngx-pwa/offline';

import { Movie } from '../../shared/movie';
import { CinemaService } from '../../shared/cinema.service';
import { Slide } from '../../../ui/slideshow';

@Component({
  template: `
    <div>
      <div>
        <mat-toolbar><span>Films à la une</span></mat-toolbar>
        <cinemapp-slideshow delay="3000" *ngIf="slides$ | async as slides; else slidesLoading">
          <cinemapp-slide *ngFor="let slide of slides" [slide]="slide"></cinemapp-slide>
        </cinemapp-slideshow>
        <ng-template #slidesLoading>
          <div class="center"><mat-progress-spinner mode="indeterminate"></mat-progress-spinner></div>
        </ng-template>
      </div>
      <div>
        <mat-toolbar><span>Tous les films</span></mat-toolbar>
        <cinemapp-movies-list *ngIf="movies$ | async as movies; else moviesLoading" [movies]="movies"></cinemapp-movies-list>
        <ng-template #moviesLoading>
          <div class="center"><mat-progress-spinner mode="indeterminate"></mat-progress-spinner></div>
        </ng-template>
      </div>
    </div>
  `
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]>;
  slides$: Observable<Slide[]>;

  constructor(protected cinema: CinemaService) { }

  ngOnInit() {

    this.movies$ = this.cinema.getMovies().pipe(catchOffline());

    this.slides$ = this.cinema.getSlides().pipe(catchOffline());

  }

}
