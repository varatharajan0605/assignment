import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountDownTimerService } from 'src/app/count-down-timer.service';

@Component({
  selector: 'app-count-down-timer-logs',
  templateUrl: './count-down-timer-logs.component.html',
  styleUrls: ['./count-down-timer-logs.component.css']
})
export class CountDownTimerLogsComponent implements OnInit {
  logs: string[] = [];
  subscription = new Subject<any>();
  constructor(private countDownService: CountDownTimerService) { }

  ngOnInit(): void {
    // start / pause status subscription
    this.countDownService.startOrPauseStatus.pipe(takeUntil(this.subscription)).subscribe(data => {
      if (data.status === 'start') {
        this.logs.push(`Started at ${data.date}`)
      } else if (data.status === 'pause') {
        this.logs.push(`Paused at ${data.date}`)
      }
    });

    // reset status subscription
    this.countDownService.resetTimer.pipe(takeUntil(this.subscription)).subscribe(data => {
      this.logs.push(`Reset at ${data.date}`)
    });
  }

}
