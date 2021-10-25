import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route4-routing.module';
import { Route4Component } from './route4.component';
import { CountDownTimerActionComponent } from './count-down-timer-action/count-down-timer-action.component';
import { CountDownTimerDisplayComponent } from './count-down-timer-display/count-down-timer-display.component';
import { CountDownTimerFrequencyComponent } from './count-down-timer-frequency/count-down-timer-frequency.component';
import { CountDownTimerLogsComponent } from './count-down-timer-logs/count-down-timer-logs.component';
import { SharedModule } from '../shared/shared.module';
import { CountDownTimerService } from '../count-down-timer.service';


@NgModule({
  declarations: [
    Route4Component,
    CountDownTimerActionComponent,
    CountDownTimerDisplayComponent,
    CountDownTimerFrequencyComponent,
    CountDownTimerLogsComponent
  ],
  imports: [
    CommonModule,
    Route4RoutingModule,
    SharedModule
  ],
  providers: [CountDownTimerService]
})
export class Route4Module { }
