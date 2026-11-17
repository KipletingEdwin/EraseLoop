
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dataservice {

  constructor( private http: HttpClient ) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  //Fetch Posts
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  //Fetch Users
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

    //Fetch Comments
  getComments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/comments`);
  }

  //Fetch Albums
  getAlbums(): Observable<any> {
    return this.http.get(`${this.apiUrl}/albums`)
  }

  //Fetch Photos
  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/photos`).pipe(
      map((photos) => photos.slice(0, 50))
    )
  }


}


