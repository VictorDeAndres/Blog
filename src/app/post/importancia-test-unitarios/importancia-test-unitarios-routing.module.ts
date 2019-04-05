import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportanciaTestUnitariosComponent } from './components/importancia-test-unitarios/importancia-test-unitarios.component';

const routes: Routes = [{
  path: '',
  component: ImportanciaTestUnitariosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportanciaTestUnitariosRoutingModule { }
