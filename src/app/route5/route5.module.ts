import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route5RoutingModule } from './route5-routing.module';
import { Route5Component } from './route5.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Route5Component
  ],
  imports: [
    CommonModule,
    Route5RoutingModule,
    SharedModule
  ]
})
export class Route5Module { }
