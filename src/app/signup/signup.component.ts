import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  signUpObj = {
    username:"",
    password:""
  }


  constructor(public dataSrvc:DataService, public router:Router){

  }
  submit(){

    console.log(this.signUpObj);

    this.dataSrvc.registerUser(this.signUpObj);

    this.router.navigate(['login']);




  }

}
