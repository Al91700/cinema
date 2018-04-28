import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'cinemapp-add-movie',
  template: `
    <h2>Ajouter un film</h2>
    <form method="post" [formGroup]="form" (ngSubmit)="addMovie()">
      <cinemapp-movie-form [form]="form"></cinemapp-movie-form>
      <button type="submit" mat-raised-button color="accent">Ajouter le film</button>
    </form>
  `,
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  form = this.formBuilder.group({
    title: '',
    category: ''
  });

  constructor(protected formBuilder: FormBuilder, protected admin: AdminService,
    protected snackBar: MatSnackBar, protected router: Router) {}

  ngOnInit() {}

  addMovie() {

    this.admin.addMovie(this.form.value).subscribe((response) => {

      if (response.success) {

        this.snackBar.open(`Film ajouté`, `OK`, { duration: 2000 });

        this.router.navigate(['/admin/movies']);

      }

    });

  }

}
