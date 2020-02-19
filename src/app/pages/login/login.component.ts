import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseridService } from '../../services/userid.service';
import { User } from '../../utils/data_types';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    email: string;
    password: string;

    constructor(private router: Router,
        private userId_service: UseridService) { }

    ngOnInit() { }

    login(): void {
        //TODO
        //Add google login here
        if (this.authorizeUser(this.email, this.password)) {
            this.router.navigate(["user"]);
        } else {
            alert("Invalid credentials");
        }
    }

    authorizeUser(email: string, password: string): boolean {
        let isAuthorized: boolean = false;
        //TODO ask the backend for the id and groups of the user
        //The id should be different than the email.
        let response_from_backend = this.ask_the_backend(email, password);

        let session_user: User = {
            email: email,
            id: response_from_backend.userid,
            groups: response_from_backend.groups
        };

        this.userId_service.setUserId(session_user);
        return true;
    }

    ask_the_backend(email: string, password: string) {
        let response = {
            userid:'',
            groups:[]
        };
        switch (email) {
            case 'emma.smith@company.com':
                response['userid'] = 'emma.smith@company.com';
                response['groups'] = ['egroup1', 'egroup2']
                break;
            case 'liam.brown@other.company.com':
                response['userid'] = 'liam.brown@other.company.com';
                response['groups'] = ['lgroup1', 'lgroup2']
                break;
            case 'ava.davis@third.company.com':
                response['userid'] = 'ava.davis@third.company.com';
                response['groups'] = ['agroup1', 'agroup2']
                break;
            default:
                console.log("No such day exists!");
                break;
        }

        return response;
    }
}
