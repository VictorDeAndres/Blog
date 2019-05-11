import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularPushNotificationsComponent } from './components/angular-push-notifications/angular-push-notifications.component';

const routes: Routes = [{
  path: '',
  component: AngularPushNotificationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularPushNotificationRoutingModule { }



