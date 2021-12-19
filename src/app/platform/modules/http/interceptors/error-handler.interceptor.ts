import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { HandledError } from '../classes/handled-error';
import { HttpOptionsService } from '../services/http-options.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    protected httpOptionsService: HttpOptionsService,
    private snackBar: MatSnackBar,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HandledError>> {
    return next.handle(request)
      .pipe(
        catchError((err) => {
          const res = new HandledError(err);
          res.status = err.status;
          switch (err.status) {
            case 401:
              localStorage.clear();
              location.reload();
              break;
            case 403:
              res.text = 'Sorry, but you dont have permission';
              break;
          }

          if (!this.httpOptionsService.dontHandleError) {
            this.snackBar.open(res.text, '', {
              panelClass: 'snackbar-error',
              duration: 4000
            });
          }

          return throwError(res);
        }),
        catchError((res) => {
          if (res.status) {
            return throwError(res);
          }
          return of(res);
        }),
      );
  }
}
