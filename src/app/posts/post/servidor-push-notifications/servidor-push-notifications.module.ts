import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServidorPushNotificationsRoutingModule } from './servidor-push-notifications-routing.module'
import { ServidorPushNotificationsComponent } from './components/servidor-push-notifications/servidor-push-notifications.component';

import { SharedPostModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    ServidorPushNotificationsComponent]
    ,
  imports: [
    CommonModule,
    ServidorPushNotificationsRoutingModule,
    SharedPostModule
  ]
})

export class ServidorPushNotificationsModule { }
