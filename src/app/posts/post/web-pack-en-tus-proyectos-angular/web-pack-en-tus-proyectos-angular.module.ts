import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPackEnTusProyectosAngularRoutingModule } from './web-pack-en-tus-proyectos-angular-routing.module';
// tslint:disable-next-line:max-line-length
import { WebPackEnTusProyectosAngularComponent } from './components/web-pack-en-tus-proyectos-angular/web-pack-en-tus-proyectos-angular.component';

import { SharedPostModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    WebPackEnTusProyectosAngularComponent
  ],
  imports: [
    CommonModule,
    WebPackEnTusProyectosAngularRoutingModule,
    SharedPostModule
  ]
})
export class WebPackEnTusProyectosAngularModule { }
