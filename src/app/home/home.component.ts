import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ImageService} from '../service/image.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  path: string;

  selectedFiles: FileList;
  files: File[] = [];
  reactiveForm: any = FormGroup;
  public userFile: any = File;

  constructor(private imageService: ImageService, private router: Router) {

  }

  sent() {
    const file = this.files[0];
    this.userFile = file;
    console.log(file);
    const formData = new FormData();
    formData.append('file', this.userFile);
    this.imageService.postImage(formData).subscribe((response => {
      console.log(response);
      this.router.navigate(['/gallery']);
    }));
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    const reader = new FileReader();
    reader.onload = (event2: any) => {
      this.path = event2.target.result;

    };
    reader.readAsDataURL(this.files[0]);

    if (this.files.length > 1) {// sprawdzenie, czy tablica plików ma więcej niż jedną zawartość
      this.replaceFile(); // zamień plik
    }

  }

  replaceFile() {
    this.files.splice(0, 1); // index = 0, remove_count = 1
  }

}

