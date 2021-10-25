import { Component, OnInit } from '@angular/core';
import { CountDownTimerService } from 'src/app/count-down-timer.service';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-count-down-timer-action',
  templateUrl: './count-down-timer-action.component.html',
  styleUrls: ['./count-down-timer-action.component.css']
})
export class CountDownTimerActionComponent implements OnInit {
  timeLimit: any;
  startOrPauseStatus: 'start' | 'pause' = 'start';
  dateFormat = 'DD-MM-YYYY h:mm:ss: a';
  subscription = new Subject<any>();
  constructor(private countDownService: CountDownTimerService) { }

  ngOnInit(): void {
    this.countDownService.done.pipe(takeUntil(this.subscription)).subscribe( _ => {
      this.completed();
    })
  }

  startOrPauseTimer() {
    // increment the start / pause counter
    this.countDownService.frequency[this.startOrPauseStatus]++;
    this.countDownService.frequencyChange.next();
    // send start / pause status with timestamp
    this.countDownService.startOrPauseStatus.next({
      status: this.startOrPauseStatus,
      date: moment().format(this.dateFormat),
    })

    if (this.startOrPauseStatus === 'start') {
      this.startOrPauseStatus = 'pause';
    } else {
      this.startOrPauseStatus = 'start';
    }
  }

  sendTimeLimit() {
    // send timelimit from input.
    this.countDownService.timeLimit.next({
      timeLimit: this.timeLimit
    })
  }

  resetTimer() {
    // increment the reset counter.
    this.countDownService.frequency.reset++;
    this.countDownService.frequencyChange.next();
    this.timeLimit = '';
    this.startOrPauseStatus = 'start';
    // send reset event
    this.countDownService.resetTimer.next({
      date: moment().format(this.dateFormat)
    })
  }

  completed() {
    this.timeLimit = '';
    this.startOrPauseStatus = 'start';
  }

}
