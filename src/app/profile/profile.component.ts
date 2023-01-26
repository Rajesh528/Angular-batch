import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username:string = '';

  constructor(public route :ActivatedRoute, public router :Router){}

  ngOnInit(): void {

    this.route.params.subscribe(res=>{
      console.log(res);
      console.log(res['id']);
      this.username = res['id'];

    });
  }

  newFunction(data:any){

    console.log(data);

  }

}
