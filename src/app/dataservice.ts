
import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Dataservice {

    private httt = inject(HttpClient)

    private apiUrl = 'https://jsonplaceholder.typicode.com/posts'


}
