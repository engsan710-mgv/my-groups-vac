import { Injectable } from '@angular/core';
import { Member } from '../utils/data_types';



@Injectable({
    providedIn: 'root'
})
export class DataService {

     members: Member[];

    constructor() { }

    getMembersOnVacation4Date(day: Date, filter: string ): string[] {
        let vac_members: string[] = [];
        this.members.forEach(member => {
            let vac_index = member.vacation.findIndex(d => d.getDate() == day.getDate() && d.getMonth() == day.getMonth());
            if (vac_index >= 0) {
                let member_name = member.first_name + ' ' + member.last_name;
                if( filter == '' || member_name.toLowerCase().indexOf(filter.toLowerCase()) >=0){
                    vac_members.push(member_name);
                }
            }
        });
        return vac_members;
    }



    getData() {
        if( this.members && this.members.length > 1 ){
            return this.members;
        }
        return this.createData();
    }

    //Utility method to generate data
    //Removed after Endpoint    
    createData(){
        this.members = [
            {

                first_name: 'Emma', last_name: 'SMITH', vacation: []
            }, {

                first_name: 'Olivia', last_name: 'JOHNSON', vacation: []
            }, {

                first_name: 'Noah', last_name: 'WILLIAMS', vacation: []
            }, {

                first_name: 'Liam', last_name: 'BROWN', vacation: []
            }, {

                first_name: 'Sophia', last_name: 'JONES', vacation: []
            }, {

                first_name: 'Mason', last_name: 'MILLER', vacation: []
            }, {

                first_name: 'Ava', last_name: 'DAVIS', vacation: []
            }, {

                first_name: 'Jacob', last_name: 'GARCIA', vacation: []
            }, {

                first_name: 'William', last_name: 'RODRIGUEZ', vacation: []
            }, {

                first_name: 'Isabella', last_name: 'WILSON', vacation: []
            }, {

                first_name: 'Ethan', last_name: 'MARTINEZ', vacation: []
            }, {

                first_name: 'Mia', last_name: 'ANDERSON', vacation: []
            }, {

                first_name: 'James', last_name: 'TAYLOR', vacation: []
            }, {

                first_name: 'Alexander', last_name: 'THOMAS', vacation: []
            }, {

                first_name: 'Michael', last_name: 'HERNANDEZ', vacation: []
            }, {

                first_name: 'Benjamin', last_name: 'MOORE', vacation: []
            }, {

                first_name: 'Elijah', last_name: 'MARTIN', vacation: []
            }, {

                first_name: 'Daniel', last_name: 'JACKSON', vacation: []
            }, {

                first_name: 'Aiden', last_name: 'THOMPSON', vacation: []
            }, {

                first_name: 'Logan', last_name: 'WHITE', vacation: []
            }, {

                first_name: 'Matthew', last_name: 'LOPEZ', vacation: []
            }, {

                first_name: 'Abigail', last_name: 'LEE', vacation: []
            }, {

                first_name: 'Lucas', last_name: 'GONZALEZ', vacation: []
            }
        ];
        this.addRandomVacation(this.members);
        console.log( this.members );
        return this.members;
    }

    //Utility method to generate data
    //Removed after Endpoint
    addRandomVacation(members: Member[]) {
        members.forEach(member => {
            //for now 10 days max vacation
            let vacation_days = this.getRandomInt(11);
            for (let i = 0; i < vacation_days; i++) {
                let month = this.getRandomInt(12);
                let day = this.getRandomInt(7);
                member['vacation'].push(new Date(2020, month, day));
            }
            member['vacation'] = member['vacation'].sort((a: Date, b: Date) => {
                return a.getTime() - b.getTime();

            });
        });
    }


    //Utility method to generate data
    //Removed after Endpoint
    getRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

}
