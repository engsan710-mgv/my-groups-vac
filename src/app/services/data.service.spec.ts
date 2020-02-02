import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: DataService = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });

    it('#getData should return an array of members', () => {
        const service: DataService = TestBed.get(DataService);
        let members = service.getData();
        let member = members[0];
        expect(member['first_name'] != null).toBeTruthy();
        expect(member['last_name'] != null).toBeTruthy();
        expect(member['vacation'] != null).toBeTruthy();
    });

    it('#getMembersOnVacation4Date should return array of members on vacation for the date', () => {
        const service: DataService = TestBed.get(DataService);
        let current = new Date();
        let next_first = new Date(current.getFullYear(), current.getMonth()+1, 1);
        let next_second = new Date(current.getFullYear(), current.getMonth()+1, 2);
        service.members = [
            {
                first_name: 'Emma', 
                last_name: 'SMITH', 
                vacation: [
                    current,
                    next_first
                ]
            }
        ];
        let members = service.getMembersOnVacation4Date(current);
        console.log('members ', members)
        expect( members[0]).toBe('Emma SMITH');
        members = service.getMembersOnVacation4Date(next_first);
        expect( members[0]).toBe('Emma SMITH');
        members = service.getMembersOnVacation4Date( next_second );
        expect( members.length == 0).toBeTruthy();
    });

});
