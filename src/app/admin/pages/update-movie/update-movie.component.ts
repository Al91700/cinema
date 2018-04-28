import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cinemapp-update-movie',
  template: `
    <h2>Modifier un film</h2>
    <form method="post" *ngIf="form" [formGroup]="form" (ngSubmit)="updateMovie()">
      <cinemapp-movie-form [form]="form"></cinemapp-movie-form>
      <input type="hidden" formControlName="id">
      <button type="submit" mat-raised-button color="accent">Modifier le film</button>
    </form>
  `,
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  form: FormGroup;

  constructor(protected formBuilder: FormBuilder, protected admin: AdminService,
    protected snackBar: MatSnackBar, protected router: Router, protected route: ActivatedRoute) {}

  ngOnInit() {

    const id = Number.parseInt(this.route.snapshot.paramMap.get('id') || '1');

    this.admin.getMovie(id).subscribe((movie) => {
      this.form = this.formBuilder.group({
        id: movie.id,
        title: movie.title,
        category: movie.title
      });
    });

  }

  updateMovie() {

    this.admin.updateMovie(this.form.value).subscribe((response) => {

      if (response.success) {

        this.snackBar.open(`Film modifié`, `OK`, { duration: 2000 });

        this.router.navigate(['/admin/movies']);

      }

    });

  }

}
