import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  constructor( private http:HttpClient) { }

  getData():Observable<User[]>{
      return this.http.get<User[]>('http://localhost:5000/data');
  }
}
