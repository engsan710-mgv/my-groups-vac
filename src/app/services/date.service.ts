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
}
