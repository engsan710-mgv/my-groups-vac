import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent} from '../utils/user/user.component';
import { AboutComponent} from '../pages/about/about.component';
import { LoginComponent} from '../pages/login/login.component';
import { SignupComponent} from '../pages/signup/signup.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '',   redirectTo: '/about', pathMatch: 'full'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,// <-- debugging purposes only
        useHash: true
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
