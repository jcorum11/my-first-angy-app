import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  displayDetails = false;
  logs: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickDisplayDetails() {
    // this.displayDetails = !this.displayDetails
    this.displayDetails = true;
    let log = '';
    for (let i = 0; i < 8; i++) {
      log += Math.round(Math.random());
    }
    this.logs.push(log);
  }
}
