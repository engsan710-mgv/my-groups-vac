import { Component, OnInit, ViewChild } from '@angular/core';
import * as constants from '../../constants';
import { Member, VacationWeek } from '../../data_types';

import { DataService } from '../../../services/data.service';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DateService } from '../../../services/date.service';


@Component({
    selector: 'app-week',
    templateUrl: './week.component.html',
    styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

    members: Member[];
    headers: string[] = [];
    week_data: VacationWeek[] = [];
    dataSource: MatTableDataSource<VacationWeek>;
    current_week: number;

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    viewing_month: Date;
    first_day_of_week_date: Date;

    constructor(private data_service: DataService,
                private date_service: DateService
            ) {
    }

    ngOnInit() {
        this.members = this.data_service.getData();
        this.date_service.viewing_date.subscribe( date =>{
            this.viewing_month = date;
        })
        this.dataSource = new MatTableDataSource(this.week_data);
        this.first_day_of_week_date = this.date_service.getDate4FirstWeekDay(this.viewing_month);
        this.generate_table_data();
        this.current_week = this.getWeek();
        //this.dataSource.sort = this.sort;
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
    
    setHeaders(day_number:number){
        let week_days = Object.assign([], constants.WEEK_DAYS);
        for(let i = 0; i < week_days.length; i++){
            week_days[i] = week_days[i] +", " + (day_number+i); 
        }
        week_days.splice(0, 0, 'Member');
        this.headers = week_days;
    }

    generate_table_data(): void {

        this.week_data=[];
        this.setHeaders(this.first_day_of_week_date.getDate());

        this.members.forEach(member => {
            let row: VacationWeek = {
                Member: '',
                Sunday: false,
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false
            };
            row[this.headers[0]] = member['first_name'] + ' ' + member['last_name'];
            for (let i = 0; i < 7; i++) {
                row[this.headers[i + 1]] = this.on_vacation(member['vacation'], i);
            }

            this.week_data.push(row);
            this.dataSource.data = this.week_data;
            this.dataSource.connect().next(this.week_data);
            this.dataSource.sort = this.sort;
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    getWeek() {
        let date = new Date(this.viewing_month.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        let week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7);
    }
    
    previousWeek(){
        let current_day = 6 + this.viewing_month.getDay();
        this.date_service.setDate(new Date( this.viewing_month.getFullYear(), this.viewing_month.getMonth(), this.viewing_month.getDate() - current_day ));
        this.current_week = this.getWeek();
        this.first_day_of_week_date = this.date_service.getDate4FirstWeekDay(this.viewing_month);
        this.generate_table_data();
        console.log('prev ', this.viewing_month);
    }
    
    nextWeek(){
        let current_day = 8 - this.viewing_month.getDay();
        this.date_service.setDate(new Date( this.viewing_month.getFullYear(), this.viewing_month.getMonth(), this.viewing_month.getDate() + current_day ));
        this.current_week = this.getWeek();
        this.first_day_of_week_date = this.date_service.getDate4FirstWeekDay(this.viewing_month);
        this.generate_table_data();
        console.log('next ', this.viewing_month);
    }

}
