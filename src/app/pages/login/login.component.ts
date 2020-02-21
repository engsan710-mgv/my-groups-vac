import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  email: string;

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
