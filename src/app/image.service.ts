import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  constructor(private http: HttpClient) {
  }

  postImage(formData: FormData): Observable<any> {


    return this.http.post('http://localhost:8080/upload-image', formData);


  }
  getImages(): Observable<any>{
    return this.http.get('http://localhost:8080/get-images');
  }

}
