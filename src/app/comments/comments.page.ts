
import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../dataservice';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
  standalone: false,
})
export class CommentsPage implements OnInit {

  comments: any[] = [];

  constructor( private dataService: Dataservice ) { }

  ngOnInit() {

    this.dataService.getComments().subscribe({
      next: (res) => this.comments = res,
      error: (err) => console.log(err)
    })

  }

}
