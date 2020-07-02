import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) {
  }


  postImage(file: File) {
    const endpoint = 'new-image';
    return this.httpClient.post('http://localhost:8080/new-image', file);
  }
}
