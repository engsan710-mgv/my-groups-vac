import { Component, OnInit } from '@angular/core';
import * as constants from '../constants';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss']
})
export class VacationComponent implements OnInit {

  week_days:string=constants.WEEK_DAYS;
  members:string[]=['John','Mary','Mac'];

  constructor() { }

  ngOnInit() {
  }

}
