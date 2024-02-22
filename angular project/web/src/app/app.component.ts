import { Component } from '@angular/core';
import { SampleService } from './sample.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome';
  styleClass = 'red';
  clicked !:string ;
  twoWayBinding : string = 'jgasdgh';
  sampleService !: string;
  hidden : boolean = true;
  isError : boolean = false;
  backColor : string = 'red';
  img1='white';
  value003 !: string
  ParentValue !: string 
  hidebox!: boolean;
  adValue !: string ;
  getName !:string;
  values0 : any[] = [];
  hidebox02 !: boolean;
  // constructor(){
  //   if(this.img1=='white'){
  //     this.img1="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxUNDxAPDw8NDxcNDQ0NFhUPDQ8NFRUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBwT/xAAnEAEBAAEEAgICAgMBAQAAAAAAAQIRQVHwwdExYSGhgeEDcbETEv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2UABYLAaxjRFABnLLQDLLRztS1AVAAAAWEgAAAAAIAAagCaqAUpQL34LfPBb54S3zwBb54LfPHJb54LfO85At88cmvfxyW+eOTXv45BqIsQFABW8YxHTEGhGcstAXLLRxt1LdSAAACAKshIAAAAACAAIACgC0oJS3yUtBLfJb53hb53LfO4Jb53hb987zkt87lv3zv9gW/fO85XXzvOUt++d/tdfv9/YLAgCkRQWNyuZctAdM89HC5asZZt4Y70FkUQA1S1m0GmpExigqAAoAIACCWguqapq1jAWRQAABKW91KW91BLfO5b53W+90t87glvnct++d/tbfO5b53+wS3753+11+/wB/Z/e/2vfn7BYjUAZCoBa55VumOIM4Yb3+I6CAJaWueWQLcm8MdPzflP8AHhp+b8/8bABAUFARUARWbQLWLTKtf48N7/EBcMd62AAAAAFSqlAvfyX3uUoF97n97/a9+V78gn97/bUndftZO63lrvzeQSRVgDhUq0BJFEAS1axaCZVrDDT835/4uOO7QCKgANyAmgtQEBAKzVq44gmOO9bAAAAAAAAAEUUBqTv5JGgO78nd+Re7gQIoPnAoICUErWM0WRQBTQGRdHTGaAzMVrTOeQMWoAICyASKAAAAAAAAAAAKsRuAsUAAKArn/wCgDmi1AFkJGgGtDvytvncEqWrb53X+9wIuvf5NfO/2znn3X7Ayzc9TXv8AIAABFAAAAAAAAAAAAFBY3HNuA0BQK5ZZamWerIKgAU0FBWoLe/mgW+d0t87rfe9L73oH97lvnf7LfO9Zzz873kDPPzveWNe6/aW+d7yW91vIL39p39r3fk7+wFTv7UAAAAAAAAAAAAAQBrVqObUoOurlnlqlqAAACKCrEaBqd+S++V7uX3yCX3vUyvnerffP0z/ky88gmeXnesW+d7ymXvkt888gW+eeV/vnlLfPPJffPIL3fle78p3fle78gd35Du/J39goigAAAAAAAgAIColoC6qkUAAENUtZtBrUSY0B1aZbgLe/JffJe/LOeXfyCZ5eeXO++VvvlL75BL75L755W++S++eQS++eT++eVvvnk/vnkDu/K935Tu/K935A7vyHd+QFAAAAAABAAZtBbWbUtZ1BrVqRJNGpAJFABm0tZyoJlWsMd6YYb3+I6AAAsajJaDWeXfy53vyqAXvyl98re/JffIJffJffPK33yX3yCX3zyd35Xu/J3fkDu/J3fk7vyd/YHd+VRQAAAAAQBBLQLWLkmWTnctfxAa1dMZozjjp/tvGaguMaABKJQS1cMN6uOLQAAAAFKgAABS+wAvsvsAP7/wCmvf5ADv7O/sAO/tUAUQBRABFAZtc8qAOOeW03+HXDD/5n3vUAbwmv+nUAAASmMUBQAAAAAf/Z";

  //   }
  //   else{
  //     this.img1="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDw0NDQ8VDQ8NDxUPDQ0PFhcPDw0VFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLi0BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIH/8QAIxABAAMAAQMDBQAAAAAAAAAAAAER8EExYfFxkdEhUaGxwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDhySAhICEgSSBEICkAKCAggCEgKCBEICEgKCBEICggISAhEAkgKBAFIEigCKAIoAigAKAFACEgSSAhICggSRBIEEkgSRBJEAUQCKoAigAaABEAEQCSQAggEiCQQIggCCCSIIpAog0qNAqVKjQCjSo0AoU1QoBSo0qBmhLVCgAKAAgEkgCRBJIAQgKSApEEaRBQUaBUq1GlQKlWo0qAUq1b2NKtv2DNKtRpUDNBqhQMhoAypIAJSgCRAIoAigRBBFGATQII0jAFVqRBUq1b2J3AM7fKrVvY0tvkGa2/arUVIMzAKBmQQDMhqRIAEACgCSQIggiCBgwIMAYKggYMCCBIa3AJbooO6xrAbjX3W6b6djt2W6xrBnb5B27LcawZEmRIMyGpAMiSAAIBAgEigBSBEEDBgGAMNMtATAIE2DE+oGzt2F7cG/X8X5Bbv5H026K9x4Xv+L8gJ2+427G9x4G3cBIO3YSAkESDIMgACAQKAIoAUgRBAwYBAwQQJBAwbBA2r9N/Be3BsFe58q9uBe3Cv139BXtyL24O3YANu4M7fYAAQAkGQAkESAKQBFAEiCSQEwDAEstASzBBpBA0r31CA2r24CBIKwQSAAyAEggAkgBQBJIEkQBCAwQgahAgSEDSCBpMkCggSCBCUgCUgECAQSBIgEigBBAEEAQgJCAkIGkEBQQFBAUECQQJBAgQCSQJJAkUAIIAggCkCSQJAgUEBQQFBAULQJIAUgBSQIEAiCASQIgggkBQQFBAQkBCQFIAUEBQQJJAUgBQQIhAkkBQQEJAQkBSQJJAkkCSQJJACkAKQApAkkCSQJJAkkDSSB//2Q==";
  //   }
  // }


//  array01 : any[] = ['one','two','three','four']


  constructor(private samService : SampleService){
    this.sampleService = this.samService.Variable01
  }
  clickButton(){
   this.clicked = "the Button has been clicked"
}
clickMe(){
  if(this.adValue == "Admin"){
    this.hidebox = true
    this.hidebox02 = false
    console.log("1111111111111111",this.adValue)

  }
  else{
    this.hidebox02 = true
    this.hidebox = false
    this.getName = this.adValue
  }

}
addValues(value:any[]){
    this.values0.push(value)
    this.values0.push(this.getName)
    console.log("111111111111111111",this.values0)
}

getValue(value7 : string){
   this.value003 = value7
   

}
buttonCli(event : MouseEvent){
  console.log("the button has clicked",event)
}

}
