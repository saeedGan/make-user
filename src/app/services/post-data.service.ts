import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor( private http:HttpClient) { }

  postData(user:User):Observable<any>{
      return this.http.post("http://localhost:5000/data",JSON.stringify(user),{'headers':{ 'content-type': 'application/json'}});
  }
}
