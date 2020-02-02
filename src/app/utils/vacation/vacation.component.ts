import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.scss']
})
export class VacationComponent implements OnInit {

  @Input() viewing_month:Date;

  constructor() {

  }

  ngOnInit() {
    
  }


}
