import { Component, OnInit } from '@angular/core';
import * as constants from '../../constants';

import { DataService } from '../../../services/data.service';
import { DateService } from '../../../services/date.service';

@Component({
    selector: 'app-month',
    templateUrl: './month.component.html',
    styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

    week_days: string[] = constants.WEEK_DAYS;
    viewing_month: Date;
    six_week_days: Date[][];
    current_Month: string;
    filter: string ='';

    constructor(private data_service: DataService,
        private date_service: DateService) {
    }

    ngOnInit() {
        this.data_service.getData();
        this.date_service.viewing_date.subscribe(date => {
            this.viewing_month = date;
            this.current_Month = constants.MONTHS[this.viewing_month.getMonth()]; 
            this.getNumberOfWeeks(this.viewing_month);
        });

    }

    getNumberOfWeeks(date: Date) {

        let year = date.getFullYear();
        let month = date.getMonth();
        let first_day = new Date(year, month, 1).getDay();
        let number_of_days = new Date(year, month + 1, 0).getDate();

        let previous_month = month - 1;
        let previous_year = year;

        if (month == 0) {
            previous_month = 11;
            previous_year = year - 1;
        }
        let previous_number_of_days = this.date_service.getNumberOfDaysInMonth(previous_year, previous_month);

        this.six_week_days = [];
        let total_days = (first_day + number_of_days) <= 35 ? 35 : 42;
        for (let d = 0; d < total_days; d++) {

            //First day starts at 0 and takes a possition so
            //there are at most 6 possition
            let week_index = Math.floor(d / 7);

            if (!this.six_week_days[week_index]) {
                this.six_week_days[week_index] = [];
            }

            if (d < first_day) {
                this.six_week_days[week_index].push(
                    new Date(previous_year, previous_month, previous_number_of_days - first_day + d + 1)
                );
                //this.six_week_days[week_index].push(previous_number_of_days-first_day+d+1);
            } else if (d - first_day + 1 <= number_of_days) {
                this.six_week_days[week_index].push(new Date(year, month, d - first_day + 1));
                //this.six_week_days[week_index].push(d-first_day+1);
            } else {
                this.six_week_days[week_index].push(new Date(year, month + 1, d - first_day - number_of_days + 1));
                //this.six_week_days[week_index].push(d-first_day + 1 - number_of_days);
            }

        }
    }



    getMembersOnVacation4Date(day: Date): string[] {
        
        return this.data_service.getMembersOnVacation4Date(day, this.filter);
    }

    previousMonth(){
        this.date_service.setDate(this.date_service.previousMonth(this.viewing_month));
    }
    
    nextMonth(){
        this.date_service.setDate(this.date_service.nextMonth(this.viewing_month));
    }
    
    applyFilter(event: Event) {
        this.filter = (event.target as HTMLInputElement).value;
        console.log( "filter ", this.filter );
    }

}
