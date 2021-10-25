import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountDownTimerService } from 'src/app/count-down-timer.service';

@Component({
  selector: 'app-count-down-timer-display',
  templateUrl: './count-down-timer-display.component.html',
  styleUrls: ['./count-down-timer-display.component.css']
})
export class CountDownTimerDisplayComponent implements OnInit, OnDestroy {
  intervalFn: any;
  intervalTime = 1000;
  counter = 0;
  timeLimit = 0;
  subscription = new Subject<any>();
  constructor(private countDownService: CountDownTimerService) { }
  
  ngOnInit(): void {
    // start or pause status subscription
    this.countDownService.startOrPauseStatus.pipe(takeUntil(this.subscription)).subscribe(data => {
      if (data.status === 'start') {
        this.start();
      } else if (data.status === 'pause') {
        this.pause();
      }
    });
    // time limit input subscription
    this.countDownService.timeLimit.pipe(takeUntil(this.subscription)).subscribe(data => {
      this.timeLimit = data.timeLimit;
    });
    // reset status subscription
    this.countDownService.resetTimer.pipe(takeUntil(this.subscription)).subscribe(data => {
      this.resetTimer();
    });

  }

  start() {
    console.log('started...')
    this.intervalFn = setInterval(() => {
      if (this.timeLimit < 0) {
        clearInterval(this.intervalFn);
        console.log('interval cleared.')
        this.onComplete();
      }
      if (this.timeLimit >= 0) {
        this.counter = this.timeLimit;
        this.timeLimit--;
        console.log(this.counter);
      }
    }, this.intervalTime);
  }

  pause() {
    console.log('paused...');
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
      return;
    }
  }

  resetTimer() {
    console.log('reset...');
    this.counter = 0;
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
      return;
    }
  }

  onComplete() {
    this.countDownService.done.next();
  }

  ngOnDestroy() {
    this.subscription.next();
    this.subscription.complete();
  }

}
