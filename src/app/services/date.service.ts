import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DateService {

    private date_src = new BehaviorSubject<Date>(new Date());
    viewing_date = this.date_src.asObservable();

    constructor() { }

    setDate(viewing_date: Date) {
        this.date_src.next(viewing_date)
    }
    
    
    getDate4FirstWeekDay(week_date:Date) {
        let year = week_date.getFullYear();
        let month = week_date.getMonth();
        let day = week_date.getDate();
        let week_day = week_date.getDay();

        return new Date(year, month, day - week_day);
    }
    
    getNumberOfDaysInMonth(year: number, month: number): number {
        let number_of_days = new Date(year, month + 1, 0).getDate();
        return number_of_days;
    }
    
    previousMonth(d_month: Date){
        let current_year = d_month.getFullYear();
        let current_month = d_month.getMonth();
        if( current_month == 0 ){
            current_year = current_year - 1;
            current_month = 11;
        }else{
            current_month = current_month - 1;
        }
        //this.date_service.setDate(new Date( current_year, current_month, 1 ));
        return new Date( current_year, current_month, 1 );
    }
    
    nextMonth(d_month: Date){
        let current_year = d_month.getFullYear();
        let current_month = d_month.getMonth();
        if( current_month == 11 ){
            current_year = current_year + 1;
            current_month = 0;
        }else{
            current_month = current_month + 1;
        }
        //this.date_service.setDate(new Date( current_year, current_month, 1 ));
        return new Date( current_year, current_month, 1 );
    }
}
