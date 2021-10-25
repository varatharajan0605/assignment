import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CountDownTimerService {
  frequency = {
    start: 0,
    pause: 0,
    reset: 0
  }
  timeLimit = new Subject<any>();
  startOrPauseStatus = new Subject<any>();
  resetTimer = new Subject<any>();
  done = new Subject<any>();
  frequencyChange = new Subject<any>();
  constructor() { }
}
