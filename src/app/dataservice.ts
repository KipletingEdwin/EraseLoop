
import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Dataservice {

    private http = inject(HttpClient)

    private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

    getPosts() {
        return this.http.get(this.apiUrl);
    }

}
