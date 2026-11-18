
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dataservice } from '../dataservice';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
  standalone: false,
})
export class PhotosPage implements OnInit {

  photos$!: Observable<any[]>;

  constructor(private dataService: Dataservice) { }

  ngOnInit() {
    this.photos$ = this.dataService.getPhotos();
  }

  ionicViewWillEnter() {
    this.photos$ = this.dataService.getPhotos();

  }

}
