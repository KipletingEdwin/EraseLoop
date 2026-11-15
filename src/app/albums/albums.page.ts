
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
  standalone: false,
})
export class AlbumsPage implements OnInit {
  albums$! :Observable<any[]>;

  constructor() { }

  ngOnInit() {
  }

}
