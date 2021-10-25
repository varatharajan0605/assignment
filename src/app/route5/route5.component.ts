import { Component, OnInit } from '@angular/core';
import { faSortUp, faSortDown, faSort } from '@fortawesome/free-solid-svg-icons';
import { RestEndpointService } from '../rest-endpoint.service';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css']
})
export class Route5Component implements OnInit {
  students: Student[] = [];
  headings: string[] = [];
  sortDetails = {
    mode: '',
    column: ''
  }
  asc = faSortUp
  desc = faSortDown
  default = faSort
  constructor(private apiEndPoint: RestEndpointService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.apiEndPoint.getStudents().subscribe(res => {
      this.students = res;
      this.headings = Object.keys(this.students[0])
    })
  }

  sortHandler(currentColumn: string) {
    let prevColumn = this.sortDetails.column;
    // if switched to diffrent columns then reset the sort details.
    if (currentColumn !== prevColumn) {
      this.sortDetails.column = currentColumn;
      this.sortDetails.mode = '';
    }

    if (this.sortDetails.mode === 'asc') {
      this.sortDetails.mode = 'desc';
    } else if (this.sortDetails.mode === 'desc') {
      this.sortDetails.mode = '';
    } else {
      this.sortDetails.mode = 'asc';
    }
    this.sortBy(this.sortDetails.mode, this.sortDetails.column);
  }

  sortBy(mode: string, column: string) {
    switch (mode) {
      case 'asc':
        this.students.sort((a: any, b: any) => {
          if (a[column] < b[column]) {
            return -1;
          } else if (a[column] > b[column]) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      case 'desc':
        this.students.sort((a: any, b: any) => {
          if (a[column] < b[column]) {
            return 1;
          } else if (a[column] > b[column]) {
            return -1;
          } else {
            return 0;
          }
        });
        break;
      default:
        // getting default data set.
        this.getStudents();
        break;
    }
  }

}

type Student = {
  name: string,
  class: number,
  section: string,
  maths: number,
  science: number,
  socialScience: number
}
