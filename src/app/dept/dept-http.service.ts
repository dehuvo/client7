import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Dept } from './dept.model';

const URL = 'http://localhost:8080/depts';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class DeptService {

  constructor(private http: HttpClient) {}

  get(): Observable<Dept[]> {
    return this.http.get<Dept[]>(URL);
  }
}