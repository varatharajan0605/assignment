import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count-down-timer-display',
  templateUrl: './count-down-timer-display.component.html',
  styleUrls: ['./count-down-timer-display.component.css']
})
export class CountDownTimerDisplayComponent implements OnInit, OnChanges {
  @Input() startOrPause: any = '';
  @Input() timeLimit: number = 0;
  @Input() reset = false;

  @Output() complete = new EventEmitter<any>();

  intervalFn: any;
  intervalTime = 1000;
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes : ', changes);
    if (changes && changes.startOrPause && !changes.startOrPause.firstChange) {
      if (this.startOrPause === 'start') {
        this.start();
      } else if (this.startOrPause === 'pause') {
        this.pause();
      }
    }
    if (changes && changes.reset) {
      if (this.reset) {
        this.resetTimer();
      }
    }
  }

  start() {
    // console.log('started...')
    this.intervalFn = setInterval(() => {
      if (this.timeLimit < 0) {
        clearInterval(this.intervalFn);
        // console.log('interval cleared.')
        this.onComplete();
      }
      if (this.timeLimit >= 0) {
        this.counter = this.timeLimit;
        this.timeLimit--;
        // console.log(this.counter);
      }
    }, this.intervalTime);
  }

  pause() {
    // console.log('paused...');
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
      return;
    }
  }

  resetTimer() {
    // console.log('reset...');
    this.counter = 0;
    if (this.intervalFn) {
      clearInterval(this.intervalFn);
      this.intervalFn = null;
      return;
    }
  }

  onComplete() {
    this.complete.emit();
  }

}
