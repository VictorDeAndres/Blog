import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitDesdeLineaComandosComponent } from './components/git-desde-linea-comandos/git-desde-linea-comandos.component';

const routes: Routes = [{
  path: '',
  component: GitDesdeLineaComandosComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitDesdeLineaComandosRoutingModule { }
