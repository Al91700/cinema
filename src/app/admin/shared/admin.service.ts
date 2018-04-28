import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../../cinema/shared/movie';
import { AccountResponse } from '../../account/shared/account-response';

interface MovieWithoutId extends Partial<Movie> {
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(protected http: HttpClient) {}

  getMovie(id: number) {

    return this.http.get<Movie>(`/api/cinema/movie/${id}`);

  }

  getMovies() {

    return this.http.get<Movie[]>(`/api/cinema/movies`);

  }

  addMovie(movie: MovieWithoutId) {

    return this.http.put<AccountResponse>(`/api/admin/movie`, movie);

  }

  updateMovie(movie: Movie) {

    return this.http.post<AccountResponse>(`/api/admin/movie`, movie);

  }

  deleteMovies(ids: number[]) {

    return this.http.delete<AccountResponse>(`/api/admin/movies/${ids.join(',')}`);

  }

  reset() {

    return this.http.post(`/api/admin/reset`, '');

  }

}
