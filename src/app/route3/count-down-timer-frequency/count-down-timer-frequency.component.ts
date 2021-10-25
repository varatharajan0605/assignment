import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-timer-frequency',
  templateUrl: './count-down-timer-frequency.component.html',
  styleUrls: ['./count-down-timer-frequency.component.css']
})
export class CountDownTimerFrequencyComponent implements OnInit {
  @Input() frequency: any;
  constructor() { }

  ngOnInit(): void {
  }

}
