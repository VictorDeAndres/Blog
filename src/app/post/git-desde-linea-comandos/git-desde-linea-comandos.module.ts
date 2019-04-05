import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitDesdeLineaComandosRoutingModule } from './git-desde-linea-comandos-routing.module';
import { GitDesdeLineaComandosComponent } from './components/git-desde-linea-comandos/git-desde-linea-comandos.component';

import { SharedPostModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    GitDesdeLineaComandosComponent
  ],
  imports: [
    CommonModule,
    GitDesdeLineaComandosRoutingModule,
    SharedPostModule
  ]
})
export class GitDesdeLineaComandosModule { }
