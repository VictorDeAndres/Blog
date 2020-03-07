import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesSvelteRoutingModule } from './routes-svelte-routing.module';
import { RoutesSvelteComponent } from './components/routes-svelte/routes-svelte.component';

import { SharedPostModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    RoutesSvelteComponent]
    ,
  imports: [
    CommonModule,
    RoutesSvelteRoutingModule,
    SharedPostModule
  ]
})

export class RoutesSvelteModule { }
