import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../utils/data_types';

@Injectable({
    providedIn: 'root'
})
export class UseridService {

    
    private userId_source = new BehaviorSubject<User>({email:'',id:'', groups:[]});
    userId_container = this.userId_source.asObservable();

    constructor() { }

    setUserId(user: User) {
        //TODO can this be set more than once? 
        this.userId_source.next(user)
    }
}
