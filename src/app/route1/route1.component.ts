import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css'],
  animations: [
    trigger('textRotate', [
      state('in', style({
      })),
      transition('* <=> in', [
        animate(200, style({
          'transform': 'rotateY(20deg) rotateX(10deg)'
        }))
      ]),
    ])
  ]
})
export class Route1Component implements OnInit {
  animationState = '';
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animationState = 'in'
    }, 1000);
  }

  captureAnimationEnd(event: any) {
    setTimeout(() => {
      if (this.animationState === 'in') {
        this.animationState = '';
      } else if (this.animationState === '') {
        this.animationState = 'in';
      }
    }, 100);
  }

}
