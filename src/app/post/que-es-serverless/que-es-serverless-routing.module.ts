import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueEsServerlessComponent } from './components/que-es-serverless/que-es-serverless.component';

const routes: Routes = [{
  path: '',
  component: QueEsServerlessComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueEsServerlessRoutingModule { }
