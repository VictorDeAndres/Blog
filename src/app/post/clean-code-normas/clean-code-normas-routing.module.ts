import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CleanCodeNormasComponent } from './components/clean-code-normas/clean-code-normas.component';

const routes: Routes = [{
  path: '',
  component: CleanCodeNormasComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CleanCodeNormasRoutingModule { }
