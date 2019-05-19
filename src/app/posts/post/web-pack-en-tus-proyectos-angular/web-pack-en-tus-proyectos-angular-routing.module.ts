import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// tslint:disable-next-line:max-line-length
import { WebPackEnTusProyectosAngularComponent } from './components/web-pack-en-tus-proyectos-angular/web-pack-en-tus-proyectos-angular.component';

const routes: Routes = [{
  path: '',
  component: WebPackEnTusProyectosAngularComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPackEnTusProyectosAngularRoutingModule { }
