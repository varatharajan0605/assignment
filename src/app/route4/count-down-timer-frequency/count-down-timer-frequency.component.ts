import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountDownTimerService } from 'src/app/count-down-timer.service';

@Component({
  selector: 'app-count-down-timer-frequency',
  templateUrl: './count-down-timer-frequency.component.html',
  styleUrls: ['./count-down-timer-frequency.component.css']
})
export class CountDownTimerFrequencyComponent implements OnInit, OnDestroy {
  frequency: any;
  subscription = new Subject<any>();
  constructor(private countDownService: CountDownTimerService) { }

  ngOnInit(): void {
    this.frequency = this.countDownService.frequency;
    // frequency change subscription
    this.countDownService.frequencyChange.pipe(takeUntil(this.subscription)).subscribe(data => {
      this.frequency = this.countDownService.frequency;
    })
  }

  ngOnDestroy() {
    this.subscription.next();
    this.subscription.complete();
  }

}
