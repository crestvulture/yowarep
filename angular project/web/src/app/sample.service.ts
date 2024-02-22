import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
   Variable01:string = "Dependency Injection";

  constructor() {  }
}
