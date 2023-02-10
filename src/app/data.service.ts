import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LoginUser } from './login-user';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public newData = new Subject<any>();
public userInfo :LoginUser[] = [
  {username:"rajesh",password:"12345"},
  {username:"haripriya",password:"12345"},
  {username:"uday",password:"12345"},
  {username:"mahesh",password:"12345"}
]


  constructor() {

    console.log(this.userInfo[0])
   }
  getUserDetails(){
    return this.userInfo;
  }

checkUser(user:User){
var index = this.userInfo.findIndex((obj:any)=>obj.username == user.username && obj.password == user.password);

console.log(index)

if(index == -1){
 return 201
}else{
  return 200
}

}


registerUser(info:any){


this.userInfo.push(info);

}


getChanges(){

this.userInfo = [
    {username:"uday",password:"12345"},
     {username:"mahesh",password:"12345"}
   ]

   console.log(this.userInfo);
  this.newData.next([
    {username:"uday",password:"12345"},
    {username:"mahesh",password:"12345"}
  ])
  

}

}
