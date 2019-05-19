import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportanciaTestUnitariosRoutingModule } from './importancia-test-unitarios-routing.module';
import { ImportanciaTestUnitariosComponent } from './components/importancia-test-unitarios/importancia-test-unitarios.component';

import { SharedPostModule } from './../../shared/shared.module';
@NgModule({
  declarations: [
    ImportanciaTestUnitariosComponent
  ],
  imports: [
    CommonModule,
    ImportanciaTestUnitariosRoutingModule,
    SharedPostModule
  ]
})
export class ImportanciaTestUnitariosModule { }
