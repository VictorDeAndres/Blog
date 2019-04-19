import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrayVsSetComponent } from './components/array-vs-set/array-vs-set.component';

const routes: Routes = [{
  path: '',
  component: ArrayVsSetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrayVsSetRoutingModule { }
