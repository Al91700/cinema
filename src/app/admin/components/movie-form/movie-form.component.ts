import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cinemapp-movie-form',
  template: `
    <div [formGroup]="form">
      <mat-form-field>
        <input type="text" matInput formControlName="title" placeholder="Titre">
      </mat-form-field>
      <mat-form-field>
        <mat-select formControlName="category" placeholder="Genre">
          <mat-option *ngFor="let category of categories" [value]="category">{{category}}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() categories: string[];

  constructor() { }

  ngOnInit() {}

}
