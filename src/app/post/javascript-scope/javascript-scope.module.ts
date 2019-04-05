import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptScopeRoutingModule } from './javascript-scope-routing.module';
import { JavascriptScopeComponent } from './components/javascript-scope/javascript-scope.component';

import { SharedPostModule } from './../shared/shared.module';

@NgModule({
  declarations: [JavascriptScopeComponent],
  imports: [
    CommonModule,
    JavascriptScopeRoutingModule,
    SharedPostModule
  ]
})
export class JavascriptScopeModule { }
