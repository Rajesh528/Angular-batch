import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public flag: boolean = true;
  public number: number = 998998989;
  public name: string = "zxczczcz";

  public loginObj: User = {
    username: "",
    password: ""
  }


  constructor(public dataSrvc: DataService, public router: Router) {

  }

  ngOnInit(): void {


  }

  public submit() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    var res = this.dataSrvc.checkUser(this.loginObj);
    if (res == 200) {
      localStorage.setItem("token", "rajesh123");

      sessionStorage.setItem("token", "uday123");
      this.router.navigate(['home'])

    } else {
      alert("login failed");
    }
  }


  move() {
    this.router.navigate(['signup'])
  }

}
