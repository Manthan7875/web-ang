import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { ActionComponent } from './action/action.component';

@Component({
  selector: 'app-ag-grid-prac',
  templateUrl: './ag-grid-prac.component.html',
  styleUrls: ['./ag-grid-prac.component.css']
})
export class AgGridPracComponent implements OnInit {
  phoneNumber = new PhoneNumber();
   addInformation = new  AddInformation();
  constructor() { }
  gridApi : any;
  rowData :[];

  list = []

  ngOnInit(): void {
  }

  columnDefs:ColDef[] = [
    { field: 'country',flex:1 , editable:true },
    { field: 'city',flex:1 , editable:true },
    { field: 'address' ,flex:1,editable:true},
    { field: 'pincode',flex:1 ,editable:true},
    { field: '',flex:1 ,editable:false, cellRenderer:ActionComponent},
  ];

  addressData = [
    { country: 'Toyota', city: 'Celica', address: "omkar nagar" , pincode:440009 },
  ];

  gridReady(params){
    this.gridApi = params;
    // this.gridApi.api.setRowData(this.addressData)



  }

  addNumber(){

    const phoneNumber = new PhoneNumber();
      this.addInformation.phoneNumber.push(phoneNumber)
  }

  save(){
    const list = this.gridApi.api.getRenderedNodes().map((RowNode)=>RowNode.data);
    this.addInformation.addresses = list;
    console.log('information',this.addInformation);


  }

  removeNumber(index){
    this.addInformation.phoneNumber.splice( index, 1);
  }

  // clone(item){
  //   this.addInformation.phoneNumber.push({...item})
  // }

  addMore(){
    console.log(this.gridApi)
    this.gridApi.api.applyTransaction({add: [{}]});
  }
}










// model
export class AddInformation {
  name: string
  gender: string
  email: string
  education: string
  phoneNumber: PhoneNumber[]=[];
  addresses: Address[]
}

export class PhoneNumber {
  number: string ;
  telephoneNumber: string ;
}

export class Address {
  country: string
  city: string
  pincode: string
  address: string
}


const data  = [];

const obj = {
  name:"dhanshree",
  gender:"female"
}


data.push(obj)

let a = [{
  number:'8787887',

},
{
  number:'8787887',

}]

const d ={
  city:'namgpur'
}

const objs = {
  name: 'dhanshree',
  gender:'female',
  phonenumer:a,
  address: d,


}

objs.phonenumer = a;


res:[{

}];

res:{
  address:{
    city:'nagpur'
  }
  list:[
    {
      city:'nagpur'
    },
    {
      city:'nagpur'
    }
  ]
}


