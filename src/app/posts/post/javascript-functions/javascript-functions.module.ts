import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptFunctionsRoutingModule } from './javascript-functions-routing.module';
import { JavascriptFunctionsComponent } from './components/javascript-functions/javascript-functions.component';

import { SharedPostModule } from './../../shared/shared.module';

@NgModule({
  declarations: [JavascriptFunctionsComponent],
  imports: [
    CommonModule,
    JavascriptFunctionsRoutingModule,
    SharedPostModule
  ]
})
export class JavascriptFunctionsModule { }
