import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionWebcomponentsRoutingModule } from './introduccion-webcomponents-routing.module';
import { IntroduccionWebcomponentsComponent } from './components/introduccion-webcomponents/introduccion-webcomponents.component';

import { SharedPostModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    IntroduccionWebcomponentsComponent,
  ],
  imports: [
    CommonModule,
    IntroduccionWebcomponentsRoutingModule,
    SharedPostModule
  ]
})

export class IntroduccionWebcomponentsModule { }

