import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

import {UploadImageComponent} from './upload-image/upload-image.component';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';
import {HeaderComponent} from './header/header.component';
import {AuthGaurdService} from './service/auth-guard.service';
import {LogoutComponent} from './logout/logout.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'upload-image', component: UploadImageComponent, canActivate: [AuthGaurdService]},
  {path: 'gallery', component: PhotoGalleryComponent, canActivate: [AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
