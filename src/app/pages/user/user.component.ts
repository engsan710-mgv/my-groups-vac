import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    viewing_month: Date = new Date();
    selected_group: string;

    constructor(private date_service: DateService) { }

    ngOnInit() {
        this.selected_group='work';
        this.date_service.viewing_date.subscribe( date =>{
            this.viewing_month = date;
        })
    }
    
    selectGroup(selected_group:string){
        this.selected_group = selected_group;
    }

}
