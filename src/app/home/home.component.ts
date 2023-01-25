import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  userInfo : any = [];

  constructor(public dataSRVC : DataService){

   
  }
  ngOnInit(): void {
    console.log(this.dataSRVC.getUserDetails());

    this.userInfo = this.dataSRVC.getUserDetails();
    
  }

}
