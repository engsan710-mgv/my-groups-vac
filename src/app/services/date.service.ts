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
}
