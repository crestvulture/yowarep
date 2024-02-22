import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new01',
  templateUrl: './new01.component.html',
  styleUrls: ['./new01.component.css']
})
export class New01Component implements OnInit {
  value001 !: string;
  value1 !: string;
  value2 !: string;
  value3 !: string;
  @Output() value002 : EventEmitter<string> = new EventEmitter<string>()
  @Output() getValues : EventEmitter<any[]> = new EventEmitter<any[]>()
  value4 !: any[]


  

  ngOnInit(): void {
  }

addValue( textValue : string){
    this.value001 = textValue;
    this.value002.emit(this.value001)
}
clickme(){
  this.value4 = [this.value1,this.value2,this.value3]
  // this.value4.push([this.value1,this.value2,this.value3])
  console.log(this.value4,"gasdkhf")
  this.getValues.emit([this.value1,this.value2,this.value3]
  )
}
}
