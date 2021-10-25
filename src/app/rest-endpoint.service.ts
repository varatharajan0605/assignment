import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestEndpointService {
  BASE_URL = 'https://fakestoreapi.com';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get(this.BASE_URL + '/products')
      .pipe(catchError(this._errorHandler));
  }

  getStudents(): Observable<any> {
    return this.http.get('assets/data/mock-data.json');
  }

  _errorHandler(error: any) {
    console.log(error);
    return throwError(error);
  }

}
