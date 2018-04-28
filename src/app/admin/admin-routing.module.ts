import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminMoviesComponent } from './pages/movies/movies.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { UpdateMovieComponent } from './pages/update-movie/update-movie.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'movie/add', component: AddMovieComponent },
    { path: 'movie/update/:id', component: UpdateMovieComponent },
    { path: 'movies', component: AdminMoviesComponent },
    { path: '', redirectTo: '/admin/movies' },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
