
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dataservice } from '../dataservice';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
  standalone: false,
})
export class AlbumsPage implements OnInit {
  albums$! :Observable<any[]>;

  constructor( private dataService: Dataservice ) { }

  ngOnInit() {
    this.loadAlbums();
  }

  ionViewDidEnter() {
    this.loadAlbums();
  }


  loadAlbums() {
    this.albums$ = this.dataService.getAlbums();
  }

}
