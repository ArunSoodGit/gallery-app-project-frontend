import {Component, OnInit} from '@angular/core';
import {ImageService} from '../service/image.service';
import {Gallery} from '@ngx-gallery/core';
import {Image} from '../models/Image';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],

})
export class PhotoGalleryComponent implements OnInit {

  images: Image[];

  index: number;

  constructor(private imageService: ImageService, public gallery: Gallery) {
    gallery.ref('gallery').setConfig({
      thumbPosition: 'bottom',
      imageSize: 'cover',
    });
  }

  ngOnInit(): void {
    this.getImages();


  }

  getImages(): void {
    this.imageService.getImages().subscribe(image => {
      this.images = image;

    });
  }

  remove(index): void {

    this.imageService.deleteImage(index).subscribe(
      data => {
        this.getImages();
      }
    );

  }

  getIndex(index) {
    this.index = index;
    console.log(index);
  }
}
