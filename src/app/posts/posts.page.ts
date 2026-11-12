
import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../dataservice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  standalone: false,
})
export class PostsPage implements OnInit {
  posts$!: Observable<any[]>;

  constructor(private dataservice: Dataservice) {}

  ngOnInit() {
    this.loadPosts();
  }

  ionViewWillEnter() {
    this.loadPosts();
  }

  loadPosts() {
    this.posts$ = this.dataservice.getPosts();
  }
}
