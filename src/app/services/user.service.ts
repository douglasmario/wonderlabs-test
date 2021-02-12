import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, shareReplay } from 'rxjs/operators';
import { User } from '../models/user';
import { ResponseWrapper } from '../models/response-wrapper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${this.environment.api.base}users/`;

  constructor(
    private httpClient: HttpClient,
    @Inject('environment') private environment: any
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Get all users
  getUsers(page: number = 1): Observable<ResponseWrapper<User[]>> {
    return this.httpClient.get<ResponseWrapper<User[]>>(`${this.url}?page=${page}`)
      .pipe(
        shareReplay(),
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get a user by ID
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error occurred on the client side
      errorMessage = error.error.message;
    } else {
      // Error occurred on the server side
      errorMessage = `Error code: ${error.status} message : ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}


