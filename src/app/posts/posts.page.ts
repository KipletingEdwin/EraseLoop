
import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../dataservice';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  standalone: false,
})
export class PostsPage implements OnInit {

  posts: any[] = [];

  constructor( private dataservice: Dataservice ) { }

  ngOnInit() {

    this.dataservice.getPosts().subscribe({
      next: (res) => this.posts = res,
      error: (err) => console.log(err) 
    })
  }

}
