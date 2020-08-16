import {Component, OnInit, ViewChild} from '@angular/core';
import {ImageService} from '../service/image.service';
import {Gallery} from '@ngx-gallery/core';
import {Lightbox} from '@ngx-gallery/lightbox';
import {Image} from '../models/Image';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],

})
export class PhotoGalleryComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  images: Image[];

  index: number;

  constructor(private imageService: ImageService, public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit(): void {

    this.imageService.getImages().subscribe(image => {
      this.images = image;

    });

  }

  remove(index) {
    this.images.splice(index, 1);
  }

  getIndex(index) {
    this.index = index;
  }
}
