import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionGraphqlRoutingModule } from './introduccion-graphql-routing.module';
import { IntroduccionGraphqlComponent } from './components/introduccion-graphql/introduccion-graphql.component';

import { SharedPostModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    IntroduccionGraphqlComponent
  ],
  imports: [
    CommonModule,
    IntroduccionGraphqlRoutingModule,
    SharedPostModule
  ]
})
export class IntroduccionGraphqlModule { }
