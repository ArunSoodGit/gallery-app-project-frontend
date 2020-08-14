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

  reactiveForm: any = FormGroup;
  public userFile: any = File;

  constructor(private imageService: ImageService, private fb: FormBuilder, private router: Router) {
    this.reactiveForm = this.fb.group({
        file: new FormControl('', Validators.required)
      }
    );
  }


  onSelectFile(event) {
    const file = event.target.files[0];
    this.userFile = file;
    console.log(file);

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.path = event.target.result;

      };
      reader.readAsDataURL(event.target.files[0]);
    }
    this.selectedFiles = file;

  }

  saveForm(submitForm: FormGroup) {
    if (submitForm.valid) {
      const file = submitForm.value;
      const formData = new FormData();
      formData.append('file', this.userFile);
      this.imageService.postImage(formData).subscribe((response => {
        console.log(response);
        this.router.navigate(['/gallery']);
      }));

    }
  }
}
