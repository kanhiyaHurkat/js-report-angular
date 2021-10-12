import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  apiUrl = 'http://localhost:3000/'
  jsReportUrl = 'http://localhost:8001/'

  constructor(
    private http: HttpClient
  ) {
  }

  post(url: string, data: any, params?: HttpParams): Observable<any> {
    return this.http.post(`${this.apiUrl}${url}`, data, {params})
  }

  get(url: string, params?: HttpParams) {
    return this.http.get(`${this.apiUrl}${url}`, {params})
  }

  postJsReport(url: string, data: any) {
    return this.http.post(`${this.jsReportUrl}${url}`, data)
  }
}
