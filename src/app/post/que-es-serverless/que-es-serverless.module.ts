import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueEsServerlessRoutingModule } from './que-es-serverless-routing.module';
import { QueEsServerlessComponent } from './components/que-es-serverless/que-es-serverless.component';

import { SharedPostModule } from './../shared/shared.module';

@NgModule({
  declarations: [QueEsServerlessComponent],
  imports: [
    CommonModule,
    QueEsServerlessRoutingModule,
    SharedPostModule
  ]
})
export class QueEsServerlessModule { }
