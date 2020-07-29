import {Component, OnInit} from '@angular/core';
import {ImageService} from '../image.service';
import {Image} from '../models/Image';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  images: Observable<Image[]>;

  constructor(private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.images = this.imageService.getImages();


  }

}
