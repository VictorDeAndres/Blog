import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroduccionGraphqlComponent } from './components/introduccion-graphql/introduccion-graphql.component';

const routes: Routes = [{
  path: '',
  component: IntroduccionGraphqlComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroduccionGraphqlRoutingModule { }
