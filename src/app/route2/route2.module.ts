import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route2RoutingModule } from './route2-routing.module';
import { Route2Component } from './route2.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Route2Component
  ],
  imports: [
    CommonModule,
    Route2RoutingModule,
    SharedModule
  ]
})
export class Route2Module { }
