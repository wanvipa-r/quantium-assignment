import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class LoginService {
    configUrl = 'assets/config.json';
    constructor(private http: HttpClient) { }

    public authen(user: string, pass: string): boolean {
        if (user == "user" && pass == "P@ssw0rd") {
            return true;
        }
        return false;
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    makeIntentionalError() {
        return this.http.get('not/a/real/url')
            .pipe(
                catchError(this.handleError)
            );
    }
}