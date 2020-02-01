import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServidorPushNotificationsComponent } from './components/servidor-push-notifications/servidor-push-notifications.component';

const routes: Routes = [{
  path: '',
  component: ServidorPushNotificationsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServidorPushNotificationsRoutingModule { }
