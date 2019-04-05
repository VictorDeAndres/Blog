import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es6BuclesAsincronosRoutingModule } from './es6-bucles-asincronos-routing.module';
import { Es6BuclesAsincronosComponent } from './components/es6-bucles-asincronos/es6-bucles-asincronos.component';

import { SharedPostModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    Es6BuclesAsincronosComponent
  ],
  imports: [
    CommonModule,
    Es6BuclesAsincronosRoutingModule,
    SharedPostModule
  ]
})
export class Es6BuclesAsincronosModule { }
