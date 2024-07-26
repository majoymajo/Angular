import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Define the Response and Auto types
interface Response {
  data: any;
}

interface Auto {
  // Define the properties of the Auto type
  id: number;
  name: string;
  //...
}

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://epico.gob.ec/vehiculo/public/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.baseUrl + 'autos/');
    
  }

  insertAuto(auto: Auto): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + 'auto/', auto, this.httpOptions);
  }

  getAuto(code: string): Observable<Auto> {
    return this.http.get<any>(this.baseUrl + 'auto/' + code).
    pipe(map(response=>{return response.data}));
  }

  actualizeAuto(auto: Auto, code: string): Observable<Response> {
    return this.http.put<Response>(this.baseUrl + 'auto/' + code, auto, this.httpOptions);
  }

  deleteAuto(code: string): Observable<any> {
    return this.http.delete(this.baseUrl + 'auto/' + code);
  }
}