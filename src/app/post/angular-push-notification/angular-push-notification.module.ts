import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularPushNotificationRoutingModule } from './angular-push-notification-routing.module';
import { AngularPushNotificationsComponent } from './components/angular-push-notifications/angular-push-notifications.component';

import { SharedPostModule } from './../shared/shared.module';

@NgModule({
  declarations: [AngularPushNotificationsComponent],
  imports: [
    CommonModule,
    SharedPostModule,
    AngularPushNotificationRoutingModule
  ]
})
export class AngularPushNotificationModule { }
