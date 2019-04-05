import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostingExpressjsFirebaseRoutingModule } from './hosting-expressjs-firebase-routing.module';
import { HostingExpressjsFirebaseComponent } from './components/hosting-expressjs-firebase/hosting-expressjs-firebase.component';

import { SharedPostModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    HostingExpressjsFirebaseComponent
  ],
  imports: [
    CommonModule,
    HostingExpressjsFirebaseRoutingModule,
    SharedPostModule
  ]
})
export class HostingExpressjsFirebaseModule { }
