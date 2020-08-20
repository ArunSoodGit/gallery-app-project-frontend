import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  constructor(private http: HttpClient) {
  }

  postImage(formData: FormData): Observable<any> {


    return this.http.post('http://localhost:8080/upload-image', formData);


  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>('http://localhost:8080/get-images');
  }

  deleteImage(id: number): Observable<any>{
    return this.http.delete<any>('http://localhost:8080/delete/' + id);
  }
}
