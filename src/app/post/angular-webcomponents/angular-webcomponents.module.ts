import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularWebcomponentsRoutingModule } from './angular-webcomponents-routing.module';
import { AngularWebcomponentComponent } from './components/angular-webcomponent/angular-webcomponent.component';

import { SharedPostModule } from './../shared/shared.module';
@NgModule({
  declarations: [
    AngularWebcomponentComponent,
  ],
  imports: [
    CommonModule,
    AngularWebcomponentsRoutingModule,
    SharedPostModule
  ]
})
export class AngularWebcomponentsModule { }
