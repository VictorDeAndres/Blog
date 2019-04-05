import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptUnMustRoutingModule } from './javascript-un-must-routing.module';
import { JavascriptUnMustComponent } from './components/javascript-un-must/javascript-un-must.component';

import { SharedPostModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    JavascriptUnMustComponent
  ],
  imports: [
    CommonModule,
    JavascriptUnMustRoutingModule,
    SharedPostModule
  ]
})
export class JavascriptUnMustModule { }
