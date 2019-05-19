import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostingExpressjsFirebaseComponent } from './components/hosting-expressjs-firebase/hosting-expressjs-firebase.component';

const routes: Routes = [{
  path: '',
  component: HostingExpressjsFirebaseComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostingExpressjsFirebaseRoutingModule { }
