import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopAngularRouterNavigationRoutingModule } from './top-angular-router-navigation-routing.module';
import { TopAngularRouterNavigationComponent } from './components/top-angular-router-navigation/top-angular-router-navigation.component';

import { SharedPostModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    TopAngularRouterNavigationComponent
  ],
  imports: [
    CommonModule,
    TopAngularRouterNavigationRoutingModule,
    SharedPostModule
  ]
})
export class TopAngularRouterNavigationModule { }
