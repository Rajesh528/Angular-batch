import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{



  flag:boolean = true;
  name:string= "ramesh kumar"
  userInfo : any = [];

  constructor(public dataSRVC : DataService){

   
  }
  ngOnInit(): void {
    console.log(this.dataSRVC.getUserDetails());

    // this.userInfo = this.dataSRVC.getUserDetails();
console.log(this.dataSRVC.userInfo);

console.log(this.dataSRVC.newData);

this.dataSRVC.newData.subscribe(res=>{
  console.log(res);
  this.userInfo = res;
});

}


addNew(){
this.dataSRVC.getChanges();
}
}
