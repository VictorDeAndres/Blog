import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavascriptScopeComponent } from './components/javascript-scope/javascript-scope.component';
const routes: Routes = [{
  path: '',
  component: JavascriptScopeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptScopeRoutingModule { }
