import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CleanCodeNormasRoutingModule } from './clean-code-normas-routing.module';
import { CleanCodeNormasComponent } from './components/clean-code-normas/clean-code-normas.component';

import { SharedPostModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    CleanCodeNormasComponent
  ],
  imports: [
    CommonModule,
    CleanCodeNormasRoutingModule,
    SharedPostModule
  ]
})
export class CleanCodeNormasModule { }
