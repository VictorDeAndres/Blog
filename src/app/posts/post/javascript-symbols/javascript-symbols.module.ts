import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptSymbolsRoutingModule } from './javascript-symbols-routing.module';
import { JavascriptSymbolsComponent } from './components/javascript-symbols/javascript-symbols.component';

import { SharedPostModule } from './../../shared/shared.module';

@NgModule({
  declarations: [JavascriptSymbolsComponent],
  imports: [
    CommonModule,
    JavascriptSymbolsRoutingModule,
    SharedPostModule
  ]
})
export class JavascriptSymbolsModule { }
