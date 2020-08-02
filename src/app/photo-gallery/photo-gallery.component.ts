import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ImageService} from '../image.service';
import {Gallery} from '@ngx-gallery/core';
import {Lightbox} from '@ngx-gallery/lightbox';
import {Image} from '../models/Image';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],

})
export class PhotoGalleryComponent implements OnInit {

  images: Image[];



  constructor(private imageService: ImageService, public gallery: Gallery, public lightbox: Lightbox) {


  }


  ngOnInit(): void {

    this.imageService.getImages().subscribe(image => {
      this.images = image;

    });


  }
}
