import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavascriptUnMustComponent } from './components/javascript-un-must/javascript-un-must.component'

const routes: Routes = [{
  path: '',
  component: JavascriptUnMustComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptUnMustRoutingModule { }
