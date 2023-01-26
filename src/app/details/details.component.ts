import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

@Input() data:any;
@Output() messageEvent = new EventEmitter<string>();
constructor(){
}
ngOnInit(): void {
  console.log(this.data)
}

submit(){

  console.log("hello");
  this.messageEvent.emit("test" + this.data);
}




}
