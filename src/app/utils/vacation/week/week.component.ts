import { Component, OnInit, Input } from '@angular/core';
import * as constants from '../../constants';
import { Member } from '../../data_types';

import { DataService } from '../../../services/data.service';


@Component({
    selector: 'app-week',
    templateUrl: './week.component.html',
    styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

    week_days: string[] = constants.WEEK_DAYS;
    members: Member[];
    table_data: string[][];
    @Input() viewing_month: Date;
    first_day_of_week_date: Date;

    constructor(private data_service: DataService) {
    }

    ngOnInit() {
        this.members = this.data_service.getData();
        this.getDate4FirstWeekDay();
        this.table_data = this.generate_table_data(this.members);
    }

    getDate4FirstWeekDay() {
        let year = this.viewing_month.getFullYear();
        let month = this.viewing_month.getMonth();
        let day = this.viewing_month.getDate();
        let week_day = this.viewing_month.getDay();
        
        this.first_day_of_week_date = new Date(year, month, day - week_day);
    }
    
    get_updated_date(add_2_current: number): Date {
        let current = new Date(this.first_day_of_week_date.getFullYear(), this.first_day_of_week_date.getMonth(), this.first_day_of_week_date.getDate() + add_2_current);
        return current;
    }

    on_vacation(dates: Date[], index: number): boolean {
        let current_date = this.get_updated_date(index);
        let vac_day = dates.findIndex(d => d.getDate() == current_date.getDate() && d.getMonth() == current_date.getMonth());
        return vac_day > -1;
    }

    generate_table_data(members: Member[]): string[][] {
        let table_data: string[][] = [];

        this.week_days = constants.WEEK_DAYS;
        this.week_days.splice(0, 0, 'Members');
        table_data.push(this.week_days);

        members.forEach(member => {
            let tmp_row: string[] = [];
            tmp_row.push(member['first_name'] + ' ' + member['last_name']);
            for (let i = 0; i < 7; i++) {
                tmp_row.push(String(this.on_vacation(member['vacation'], i)));
            }
            table_data.push(tmp_row);
        });
        return table_data;
    }


}
