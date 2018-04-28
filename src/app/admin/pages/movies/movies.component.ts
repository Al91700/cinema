import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { Movie } from '../../../cinema/shared/movie';
import { MatTableDataSource, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  selector: 'cinemapp-admin-movies',
  template: `
    <h2>Liste des films</h2>
    <a mat-raised-button color="accent" routerLink="/admin/movie/add">Ajouter un film</a>
    <a mat-raised-button color="accent" (click)="deleteMovies()">Supprimer</a>
    <a mat-raised-button color="accent" (click)="reset()">Réinitialiser</a>
    <mat-table [dataSource]="dataSource">
      <ng-container matColumnDef="select">
        <mat-header-cell *matHeaderCellDef>
          <mat-checkbox (change)="masterToggle()" [checked]="selection.hasValue() && isAllSelected"
          [indeterminate]="selection.hasValue() && !isAllSelected">
          </mat-checkbox>
        </mat-header-cell>
        <mat-cell *matCellDef="let row">
          <mat-checkbox (click)="$event.stopPropagation()" (change)="selection.toggle(row)" [checked]="selection.isSelected(row)">
          </mat-checkbox>
        </mat-cell>
      </ng-container>
      <ng-container matColumnDef="title">
        <mat-header-cell *matHeaderCellDef>Titre</mat-header-cell>
        <mat-cell *matCellDef="let movie"><a [routerLink]="['/admin/movie/update/', movie.id]">{{movie.title}}</a></mat-cell>
      </ng-container>
      <ng-container matColumnDef="category">
        <mat-header-cell *matHeaderCellDef>Genre</mat-header-cell>
        <mat-cell *matCellDef="let movie">{{movie.category}}</mat-cell>
      </ng-container>
      <ng-container matColumnDef="date">
        <mat-header-cell *matHeaderCellDef>Date de sortie</mat-header-cell>
        <mat-cell *matCellDef="let movie">{{movie.releasedDate | date:'shortDate'}}</mat-cell>
      </ng-container>
      <mat-header-row *matHeaderRowDef="columnsToDisplay"></mat-header-row>
      <mat-row *matRowDef="let movies; columns: columnsToDisplay"></mat-row>
    </mat-table>
    <mat-paginator [pageSize]="3" [showFirstLastButtons]="true"></mat-paginator>
  `,
  styleUrls: ['./movies.component.css']
})
export class AdminMoviesComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Movie>([]);
  columnsToDisplay = ['select', 'title', 'category', 'date'];
  selection = new SelectionModel<Movie>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  get isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  constructor(protected admin: AdminService, protected snackBar: MatSnackBar, protected router: Router) {}

  ngOnInit() {
    this.loadMovies();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadMovies() {

    this.admin.getMovies().subscribe((movies) => {
      this.dataSource.data = movies;
    });

  }

  masterToggle() {
    this.isAllSelected ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  deleteMovies() {

    if (this.selection.selected.length > 0) {

      this.admin.deleteMovies(this.selection.selected.map((movie) => movie.id)).subscribe((response) => {

        if (response.success) {

          this.snackBar.open(`Film(s) supprimé(s)`, `OK`, { duration: 2000 });

          this.loadMovies();

        }

      });

    }

  }

  reset() {

    this.admin.reset().subscribe();

    this.loadMovies();

  }

}
