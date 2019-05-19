import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// tslint:disable-next-line:max-line-length
import { IntroduccionExpresionesRegularesComponent } from './components/introduccion-expresiones-regulares/introduccion-expresiones-regulares.component';

const routes: Routes = [{
  path: '',
  component: IntroduccionExpresionesRegularesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroduccionExpresionesRegularesRoutingModule { }
