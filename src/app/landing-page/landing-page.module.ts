import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxJsonLdModule } from '@ngx-lite/json-ld';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    NgxJsonLdModule
  ]
})
export class LandingPageModule { }
