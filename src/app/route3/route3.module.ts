import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';
import { CountDownTimerDisplayComponent } from './count-down-timer-display/count-down-timer-display.component';
import { CountDownTimerActionComponent } from './count-down-timer-action/count-down-timer-action.component';
import { CountDownTimerLogsComponent } from './count-down-timer-logs/count-down-timer-logs.component';
import { CountDownTimerFrequencyComponent } from './count-down-timer-frequency/count-down-timer-frequency.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Route3Component,
    CountDownTimerDisplayComponent,
    CountDownTimerActionComponent,
    CountDownTimerLogsComponent,
    CountDownTimerFrequencyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Route3RoutingModule
  ]
})
export class Route3Module { }
