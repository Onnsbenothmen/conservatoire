import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor() { }

  ngOnInit(){
    }
    onLoggedin()
{
console.log(this.user);
}
  }

