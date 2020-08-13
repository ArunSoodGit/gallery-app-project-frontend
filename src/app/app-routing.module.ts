import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';

import {HomeComponent} from './home/home.component';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';
import {HeaderComponent} from './header/header.component';



const routes: Routes = [
   {path: 'home', component: HomeComponent},
  {path: 'gallery', component: PhotoGalleryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'header', component: HeaderComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
