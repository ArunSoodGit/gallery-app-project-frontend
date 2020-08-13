import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginService} from './login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {ImageService} from './image.service';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GallerizeModule} from '@ngx-gallery/gallerize';

import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {XhrInterceptor} from './http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoGalleryComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    ReactiveFormsModule,
    FontAwesomeModule,
    GalleryModule,
    LightboxModule,
    BrowserAnimationsModule,
    GallerizeModule
  ],
  providers: [LoginService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true } , ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
