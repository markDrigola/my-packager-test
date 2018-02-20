import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstService} from './services/first.service';
import { FirstComponent } from './first/first.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstComponent],
  providers: [
    FirstService
  ],
  exports: [
    FirstComponent
  ]
})
export class FirstModule { }
