import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesSvelteComponent } from './components/routes-svelte/routes-svelte.component';

const routes: Routes = [{
  path: '',
  component: RoutesSvelteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesSvelteRoutingModule { }
