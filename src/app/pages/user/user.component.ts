import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    viewing_month: Date = new Date();
    selected_group: string;

    constructor() { }

    ngOnInit() {
        this.selected_group='work';
    }
    
    selectGroup(selected_group:string){
        this.selected_group = selected_group;
    }

}
