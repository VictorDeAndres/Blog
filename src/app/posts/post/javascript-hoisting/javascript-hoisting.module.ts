import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptHoistingRoutingModule } from './javascript-hoisting-routing.module';
import { JavascriptHoistingComponent } from './components/javascript-hoisting/javascript-hoisting.component';

import { SharedPostModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    JavascriptHoistingComponent
  ],
  imports: [
    CommonModule,
    JavascriptHoistingRoutingModule,
    SharedPostModule
  ]
})
export class JavascriptHoistingModule { }
