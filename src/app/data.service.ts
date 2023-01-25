import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

public userInfo :any = [
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


for(var a=0; a <this.userInfo.length; a++){

console.log(this.userInfo[a]);

if(this.userInfo[a].username == user.username && this.userInfo[a].password == user.password){
  console.log("login success")

  return 200;
}
}

console.log(this.userInfo)


return 201;
}


registerUser(info:any){


this.userInfo.push(info);

}

}
