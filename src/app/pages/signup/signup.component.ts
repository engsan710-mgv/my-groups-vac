import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  
  constructor(private router: Router) { }

  ngOnInit() {}

  login(): void {
    //TODO
    //Add google login here
    if (this.email) {
      this.router.navigate(["user"]);
    } else {
      alert("Invalid credentials");
    }
  }

}
