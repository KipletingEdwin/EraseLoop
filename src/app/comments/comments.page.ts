
import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../dataservice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
  standalone: false,
})
export class CommentsPage implements OnInit {

  comments$!: Observable<any[]>;

  constructor( private dataService: Dataservice ) { }

  ngOnInit() {
    this.loadComments();

  }

  ionViewDidEnter() {
    this.loadComments();
  }

  loadComments() {
    this.comments$ = this.dataService.getComments();
  }

}
