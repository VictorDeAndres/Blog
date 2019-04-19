import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularWebcomponentComponent } from './components/angular-push-notifications/angular-push-notifications.component';

const routes: Routes = [{
  path: '',
  component: AngularWebcomponentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularPushNotificationRoutingModule { }
