import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicroFrontendsComponent } from './components/micro-frontends/micro-frontends.component';

const routes: Routes = [{
  path: '',
  component: MicroFrontendsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroFrontendsRoutingModule { }
