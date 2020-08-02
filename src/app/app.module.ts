import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginService} from './login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared/shared.module';
import {ImageService} from './image.service';
import {PhotoGalleryComponent} from './photo-gallery/photo-gallery.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GallerizeModule} from '@ngx-gallery/gallerize';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoGalleryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    GalleryModule,
    LightboxModule,
    BrowserAnimationsModule,
    GallerizeModule
  ],
  providers: [LoginService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
