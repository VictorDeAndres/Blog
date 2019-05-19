import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavascriptHoistingComponent } from './components/javascript-hoisting/javascript-hoisting.component';

const routes: Routes = [{
  path: '',
  component: JavascriptHoistingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptHoistingRoutingModule { }
