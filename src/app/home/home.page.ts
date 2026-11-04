
import { Component, inject } from '@angular/core';
import { Dataservice } from '../dataservice';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})


export class HomePage { 

  constructor(private dataService: Dataservice) {}

  ngOnInit() {

    this.dataService.getPosts().subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err);
      }
    })

  }



}
