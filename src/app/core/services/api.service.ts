import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  get(path?: string): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}${path}`)
      .pipe(tap(response => this.handleResponse(response)), catchError(error => this.handleError(error)));
  }

  post(path: string, body: Object = {}): Observable<any> {
    console.log(`Trying crate new item, path: ${environment.apiUrl}${path}`);
    return this.http
      .post(`${environment.apiUrl}${path}`, JSON.stringify(body), {
        headers: this.headers,
      })
      .pipe(tap(response => this.handleResponse(response)), catchError(error => this.handleError(error)));
  }

  private handleResponse(response: any) {
    console.log(`Response of server ${JSON.stringify(response)}`);
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      console.error(`error inside instance of Response`);
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    console.error(`error outside instance of Response`);
    return Observable.throw(error || 'backend server error');
  }
}
