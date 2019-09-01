import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavascriptFunctionsComponent } from './components/javascript-functions/javascript-functions.component';

const routes: Routes = [{
  path: '',
  component: JavascriptFunctionsComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptFunctionsRoutingModule { }



