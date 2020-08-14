import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

import {HomeComponent} from './home/home.component';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';
import {HeaderComponent} from './header/header.component';
import {AuthGaurdService} from './service/auth-guard.service';


const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGaurdService]},
  {path: 'gallery', component: PhotoGalleryComponent, canActivate: [AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent, canActivate: [AuthGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
