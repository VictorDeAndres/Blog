import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Es6BuclesAsincronosComponent } from './components/es6-bucles-asincronos/es6-bucles-asincronos.component';

const routes: Routes = [{
  path: '',
  component: Es6BuclesAsincronosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es6BuclesAsincronosRoutingModule { }
