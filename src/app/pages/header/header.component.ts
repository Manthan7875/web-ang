import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { left } from '@popperjs/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// data get by parent using input decoreator =>
  @Input() love!: string;
  // @Output() go : Event = new EventEmitter<any>
// --------------******-------------
  constructor() { }
  ngOnInit(): void {

    // working 
    console.log("manthan");

   console.log(this.List.filter(x=> x.name));

   console.log(this.List.map(x=> x.id + 1));

   console.log(this.List.find(x=> x.id == 1)?.name);

 this.List.forEach(a => { console.log( a.username)});
// ---------***------


// console.log(this.a.sort(this.asceding));
console.log(this.a.sort(this.descend)) ;

this.b = this.a != undefined ?  this.a.map(a => {
  return  console.log(a + 2)  
}):undefined ;

this.a.forEach(a => {
  return console.log( a + 8 )
})


  }

asceding(x: any,y: any){
return x-y 
}

descend(p: any,q: any){
return p + q
}
a = [1,2,3,11, 12,25, 40,4,5,6,7,8,9,30,10];


b : any = []


  transfer:string|undefined;

 List = [
  {id: 1 ,
    name: "rahul",
    username: 'rahul1'
  },
  {id: 2 ,
    name: "harshal",
    username: 'harshal1'
  }
,{id: 3 ,
  name: "sahil",
  username: 'sahil1'
},
{id: 4 ,
  name: "shubham",
  username: 'shubham1'
},
{id: 5 ,
  name: "sagar",
  username: 'sagar1'
}
]
 blank:[] | undefined;

}


