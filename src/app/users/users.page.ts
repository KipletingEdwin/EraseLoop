
import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../dataservice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: false,
})
export class UsersPage implements OnInit {

  users$!: Observable<any[]>;

  constructor( private dataservice: Dataservice ) { }

  ngOnInit() {
    this.loadUsers();
  }

  ionViewWillEnter() {
    this.loadUsers();

  }

  loadUsers() {
    this.users$ = this.dataservice.getUsers();
  }


}
