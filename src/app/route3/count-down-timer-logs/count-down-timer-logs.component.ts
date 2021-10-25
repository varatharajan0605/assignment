import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count-down-timer-logs',
  templateUrl: './count-down-timer-logs.component.html',
  styleUrls: ['./count-down-timer-logs.component.css']
})
export class CountDownTimerLogsComponent implements OnInit, OnChanges {
  logs: string[] = [];
  @Input() logDate = '';
  @Input() startOrPause = '';
  @Input() reset = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.logDate) {
      if (this.startOrPause === 'start') {
        this.logs.push(`Started at ${this.logDate}`)
      } else if (this.startOrPause === 'pause') {
        this.logs.push(`Paused at ${this.logDate}`)
      }
    }
    if (changes && changes.reset) {
      if(this.reset) {
        this.logs.push(`Reset at ${this.logDate}`)
      }
    }
  }

}
