
import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../dataservice';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: false,
})
export class UsersPage implements OnInit {

  users: any[] = [];

  constructor( private dataservice: Dataservice ) { }

  ngOnInit() {
    this.dataservice.getUsers().subscribe({
      next: (res) => this.users = res,
      error: (err) => console.log(err)
    })

    
  }

}
