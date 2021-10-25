import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-count-down-timer-action',
  templateUrl: './count-down-timer-action.component.html',
  styleUrls: ['./count-down-timer-action.component.css']
})
export class CountDownTimerActionComponent implements OnInit, OnChanges {
  @Input() complete = false;

  @Output() startOrPauseEvent = new EventEmitter<any>();
  @Output() resetEvent = new EventEmitter<any>();
  @Output() timeLimitEvent = new EventEmitter<any>();

  // localLogs: string[] = [];
  timeLimit: any;
  // intervalFn: any;
  // intervalTime = 1000;
  startOrPauseStatus: 'start' | 'pause' = 'start';
  frequency = {
    start: 0,
    pause: 0,
    reset: 0
  }
  dateFormat = 'DD-MM-YYYY h:mm:ss: a';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.complete) {
      this.completed();
    }
  }

  startOrPauseTimer() {
    this.frequency[this.startOrPauseStatus]++;
    this.startOrPauseEvent.emit({
      status: this.startOrPauseStatus,
      date: moment().format(this.dateFormat),
      frequency: this.frequency
    })
    if (this.startOrPauseStatus === 'start') {
      this.startOrPauseStatus = 'pause';
    } else {
      this.startOrPauseStatus = 'start';
    }
  }

  sendTimeLimit() {
    this.timeLimitEvent.emit({
      timeLimit: this.timeLimit
    })
  }

  resetTimer() {
    this.frequency.reset++;
    this.timeLimit = '';
    this.startOrPauseStatus = 'start';
    this.resetEvent.emit({
      date: moment().format(this.dateFormat),
      frequency: this.frequency
    });
  }

  completed() {
    this.timeLimit = '';
    this.startOrPauseStatus = 'start';
  }


}
