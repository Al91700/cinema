import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTableModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule, MatCheckboxModule, MatPaginatorModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminMoviesComponent } from './pages/movies/movies.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { UpdateMovieComponent } from './pages/update-movie/update-movie.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatPaginatorModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminMoviesComponent, AddMovieComponent, MovieFormComponent, UpdateMovieComponent]
})
export class AdminModule {}
