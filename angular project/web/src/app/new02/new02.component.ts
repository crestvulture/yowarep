import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new02',
  templateUrl: './new02.component.html',
  styleUrls: ['./new02.component.css']
})
export class New02Component implements OnInit {

  @Input() inputdata !: string  
  @Input() addValues !: any[]  
  constructor() { }

  ngOnInit(): void {
  }

}
