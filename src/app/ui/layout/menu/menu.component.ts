import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cinemapp-menu',
  /* tslint:disable:max-line-length */
  template: `
    <mat-toolbar color="primary">
      <a routerLink="/cinema/movies" routerLinkActive="nav-active">
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <ng-container i18n="menu movies|Menu item for movies@@menuMovies">Films</ng-container>
      </a>
      <a routerLink="/cinema/theaters" routerLinkActive="nav-active">
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <ng-container i18n="menu theaters|Menu item for theaters@@menuTheaters">Cinémas</ng-container>
      </a>
      <a *ngIf="isConnected" routerLink="/account/profile" routerLinkActive="nav-active">
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <ng-container i18n="menu reservations|Menu item for reservations@@menuReservations">Mes résas</ng-container>
      </a>
      <a *ngIf="!isConnected" routerLink="/account/login" routerLinkActive="nav-active">
        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <ng-container i18n="menu account|Menu item for account@@menuAccount">Compte</ng-container>
      </a>
    </mat-toolbar>
  `,
  /* tslint:enable:max-line-length */
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  @Input() isConnected = false;

}
