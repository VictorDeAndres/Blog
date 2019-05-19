import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroduccionWebcomponentsComponent } from './components/introduccion-webcomponents/introduccion-webcomponents.component';

const routes: Routes = [{
  path: '',
  component: IntroduccionWebcomponentsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IntroduccionWebcomponentsRoutingModule { }

