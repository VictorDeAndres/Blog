import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopAngularRouterNavigationComponent } from './components/top-angular-router-navigation/top-angular-router-navigation.component';

const routes: Routes = [{
  path: '',
  component: TopAngularRouterNavigationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopAngularRouterNavigationRoutingModule { }
