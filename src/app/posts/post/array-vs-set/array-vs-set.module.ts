import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrayVsSetRoutingModule } from './array-vs-set-routing.module';
import { ArrayVsSetComponent } from './components/array-vs-set/array-vs-set.component';

import { SharedPostModule } from './../../shared/shared.module';

@NgModule({
  declarations: [ArrayVsSetComponent],
  imports: [
    CommonModule,
    ArrayVsSetRoutingModule,
    SharedPostModule
  ]
})
export class ArrayVsSetModule { }
