
import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../dataservice';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  standalone: false,
})
export class PostsPage implements OnInit {

  posts: any[] = [];
  private postsSub!: Subscription;

  constructor( 
    private dataservice: Dataservice,
  ) { }

  ionViewDidEnter() {
      this.dataservice.getPosts().subscribe({
      next: (res) =>  { console.log('Posts API response:', res);  this.posts = res},
      error: (err) => console.log(err) 
    })

  }

  ngOnInit() {


  }

  

}
