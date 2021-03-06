import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(protected router: Router, protected auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authReq = !this.auth.getToken() ? req : req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.auth.getToken()}`)
    });

    return next.handle(authReq).pipe(tap(() => {}, (error) => {

      if ((error instanceof HttpErrorResponse) && (error.status === 401 || error.status === 403)) {

        this.auth.disconnect();

      }

    }));

  }

}
