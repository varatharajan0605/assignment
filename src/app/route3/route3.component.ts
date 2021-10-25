import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})
export class Route3Component implements OnInit {
  timeLimit: number = 0;
  startOrPause: any = '';
  reset =  false;
  completed = false;
  logDate = '';
  frequency = {
    start: 0,
    pause: 0,
    reset: 0
  };
  constructor() { }

  ngOnInit(): void {
  }

  onStartOrPause(data: any) {
    console.log(data);
    this.completed = false;
    this.reset = false;
    this.startOrPause = data.status;
    this.logDate = data.date;
    this.frequency = data.frequency;
  }

  onTimeLimitInput(data: { timeLimit: number }) {
    console.log(data);
    this.timeLimit = data.timeLimit;
  }

  onReset(data: any) {
    this.reset = true;
    this.timeLimit = 0;
    this.startOrPause = '';
    this.logDate = data.date;
    this.frequency = data.frequency;
  }

  onComplete() {
    this.timeLimit = 0;
    this.startOrPause = '';
    this.reset = false;
    this.completed = true;
  }

}
