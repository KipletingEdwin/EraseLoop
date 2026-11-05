
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Dataservice {

  constructor( private http: HttpClient ) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  getPosts() {
    return this.http.get(this.apiUrl);
  }

}


