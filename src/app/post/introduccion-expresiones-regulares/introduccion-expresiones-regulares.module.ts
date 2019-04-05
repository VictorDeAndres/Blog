import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionExpresionesRegularesRoutingModule } from './introduccion-expresiones-regulares-routing.module';

// tslint:disable-next-line:max-line-length
import { IntroduccionExpresionesRegularesComponent } from './components/introduccion-expresiones-regulares/introduccion-expresiones-regulares.component';
import { SharedPostModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    IntroduccionExpresionesRegularesComponent
  ],
  imports: [
    CommonModule,
    IntroduccionExpresionesRegularesRoutingModule,
    SharedPostModule
  ]
})
export class IntroduccionExpresionesRegularesModule { }
