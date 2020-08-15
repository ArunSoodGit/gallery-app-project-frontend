import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {BasicAuthHtppInterceptorService} from './service/basic-auth-http-interceptor.service';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoGalleryComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    GalleryModule,
    LightboxModule,
    BrowserAnimationsModule,
    GallerizeModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
