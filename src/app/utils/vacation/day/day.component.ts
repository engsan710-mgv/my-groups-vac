import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input() header:string;
  @Input() member_names:string[];

  constructor() { }

  ngOnInit() {
  }

}
