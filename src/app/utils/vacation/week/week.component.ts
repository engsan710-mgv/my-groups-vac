import { Component, OnInit } from '@angular/core';
import * as constants from '../../constants';
import { Member } from '../../data_types';


@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  week_days:string[]=constants.WEEK_DAYS;
  members:Member[];
  table_data:string[][];
  reference_date:Date;

  constructor() {
    let current = new Date();
    let current_one = this.get_updated_date(1);
    let current_two = this.get_updated_date(2);
    let current_three = this.get_updated_date(3);

    this.reference_date = current;
    this.members = [
      {
        first_name: 'John',
        last_name: 'Smith',
        vacation: [current, current_one, current_two]
      },
      {
        first_name: 'Mary',
        last_name: 'Smith',
        vacation: [current, current_three]
      },
      {
        first_name: 'Jake',
        last_name: 'Smith',
        vacation: [current_one, current_two]
      }
    ]
    this.table_data = this.generate_table_data(this.members);
  }

  ngOnInit() {
  }

  get_updated_date(add_2_current: number): Date{
    let current = new Date();
    current.setDate(current.getDate() + add_2_current);
    return current;
  }

  on_vacation(dates:Date[], index: number): boolean {
    let current_date = this.get_updated_date(index);
    let vac_day = dates.findIndex( d => d.getDate() == current_date.getDate());
    return vac_day > -1;
  }

  generate_table_data(members:Member[]):string[][]{
    let table_data:string[][]=[[]];
    this.week_days=constants.WEEK_DAYS;
    this.week_days.splice(0, 0, '');
    table_data.push(this.week_days);
    members.forEach( member => {
      let tmp_row:string[]=[];
      tmp_row.push(member['first_name'] +' '+member['last_name']);
      for( let i=1; i < 8; i++){
        tmp_row.push( String( this.on_vacation( member['vacation'], i) ) );
      }
      table_data.push(tmp_row);
    });
    console.table(table_data);
    return table_data;
  }


}
