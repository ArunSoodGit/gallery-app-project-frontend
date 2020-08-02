import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColumnOneComponent} from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule
    ],
  exports: [
    ColumnOneComponent
  ]

})
export class SharedModule {
}
