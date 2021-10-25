import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.css']
})
export class Route6Component implements OnInit {
  // initially filled with 10 items to make content scrollable.
  lists = Array<number>(10).fill(0);
  constructor() { }

  ngOnInit(): void {
  }

  onScroll(event: any) {
    // console.log('event :', event);
    // console.log('event offset height: ', event.target.offsetHeight);
    // console.log('event scroll top: ', event.target.scrollTop);
    // console.log('event scroll height: ', event.target.scrollHeight);
    if (event.target.offsetHeight + Math.ceil(event.target.scrollTop) >= event.target.scrollHeight) {
      // console.log('scroll ended.');
      this.lists.push(0);
    }
  }

  clickHandler(index: number) {
    alert(`button ${index + 1} is clicked.`)
  }

}
