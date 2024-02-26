import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { MainpageService } from 'src/app/mainservices/mainpage.service';
@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.css']
})
export class NgxDatatableComponent implements OnInit {
  @ViewChild('myTable') table: any;
  rows:any=[]
  expanded: any = {};
  timeout: any;
  ColumnMode = ColumnMode;

  data:any[]=[
    {
      id : 1,
      name:"Manthan",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 2,
      name:"suraj",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 3,
      name:"chetan",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 4,
      name:"gunda",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 5,
      name:"raju",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 6,
      name:"saagar",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 1,
      name:"Manthan",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 2,
      name:"suraj",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 3,
      name:"chetan",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 4,
      name:"gunda",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 5,
      name:"raju",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 6,
      name:"saagar",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 1,
      name:"Manthan",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 2,
      name:"suraj",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 3,
      name:"chetan",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 4,
      name:"gunda",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 5,
      name:"raju",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 6,
      name:"saagar",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 1,
      name:"Manthan",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 2,
      name:"suraj",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 3,
      name:"chetan",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 4,
      name:"gunda",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 5,
      name:"raju",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
    {
      id : 6,
      name:"saagar",
      sirname:"Bagale",
      cityName:"Nagpur",
    },
  ]
  constructor(public service:MainpageService ,) {

  }

  ngOnInit(){
    var entireData = this.service.getUser();
    entireData.subscribe((data) => {
      console.log(data);
      this.rows= (data);
      console.log('manthan', this.rows)
});

console.log(this.data);

const a= this.data;
a.forEach(a=>{
  delete (a.id)
console.log(a);

});

  }

  onPage(event:any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }


  toggleExpandRow(row:any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event:any) {
    console.log('Detail Toggled', event);
  }






}
