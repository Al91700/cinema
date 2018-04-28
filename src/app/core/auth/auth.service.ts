import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorage } from 'local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isConnected = new BehaviorSubject(false);
  readonly tokenKey = 'access_token';
  tokenValue: string | null = null;

  constructor(protected localStorage: LocalStorage) {

    this.tokenValue = localStorage.getItem(this.tokenKey);

    this.isConnected.next(!!this.getToken());

  }

  connect(token: string) {

    this.isConnected.next(true);

    this.tokenValue = token;

    localStorage.setItem(this.tokenKey, token);

  }

  disconnect() {

    this.isConnected.next(false);

    this.tokenValue = null;

    localStorage.removeItem(this.tokenKey);

  }

  getToken() {

    return this.tokenValue;

  }

}
