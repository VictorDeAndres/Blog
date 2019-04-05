import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicroFrontendsRoutingModule } from './micro-frontends-routing.module';
import { MicroFrontendsComponent } from './components/micro-frontends/micro-frontends.component';

import { SharedPostModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    MicroFrontendsComponent
  ],
  imports: [
    CommonModule,
    MicroFrontendsRoutingModule,
    SharedPostModule
  ]
})
export class MicroFrontendsModule { }
