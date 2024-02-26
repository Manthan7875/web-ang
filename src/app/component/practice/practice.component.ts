import { Component, OnInit, ViewChild } from '@angular/core';
import { MainpageService } from 'src/app/mainservices/mainpage.service';
import { PracticeChildComponent } from './practiceChild/practice-child/practice-child.component';


export class typeDefine {
  id: string
  parentUserId: string
  roleName: string
  isActive: boolean
  isDeleted: boolean
  isDefault: boolean
  moduleName: string
  isSystemGeneratedRole: boolean
}

export interface dddd{

    id:number;
    address:string ;
    shh:string;
    isExpand :boolean

}
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})



export class PracticeComponent implements OnInit {

  @ViewChild ('PracticeChildComponent') practiceChildComponent:PracticeChildComponent;

  parentData

  constructor(   public service:MainpageService ,) {

 }

  storedId:any
  data = [
    {
      id:1,
      name:"dhanshee"
    },
    {
      id:2,
      name:"sagar"
    },
    {
      id:3,
      name:"rohit"
    },
    {
      id:4,
      name:"shubhan"
    },
    {
      id:5,
      name:"vijay"
    }
  ]


  getAddresById=[
    {
      id:1,
      name:"dhanshee" ,
      address:[
        {
          id:1,
          address:"nagpur omkar nagar" ,
          shh:'ghj'
        },
        {
          id:2,
          address:"Dhantoli nagpur" ,
          shh:'ghj'
        }
      ]
    },
    {
      id:2,
      name:"sagar"
    },
    {
      id:3,
      name:"rohit"
    },
    {
      id:4,
      name:"shubhan"
    },
    {
      id:5,
      name:"vijay"
    }
  ]


  responsce= {
    arra:[
        {
          id:4,
          name:"shubhan",
          array:[
            {
              subh:1,
              name:[
                {
                  name1:"sagar",
                  id:20
                }
              ]
            }
          ]
        },
    ]
  }


  legendFormData:any


  arrayObj:any = [
    {
      id:1,
      address:"nagpur omkar nagar" ,
      shh:'ghj'
    },
    {
      id:2,
      address:"Dhantoli nagpur" ,
      shh:'ghj'
    },
    {
      id:3,
      address:"Dhantoli nagpur dffc" ,
      shh:'ghfgghjj'
    }
  ]


  ngOnInit(): void {

  this.service.behaviourSubject.subscribe((manthan)=>{
    this.legendFormData = manthan;
  });

    for(let item of this.data){
      console.log(item)
      console.log(item.name)
    }

    this.filldata();
    this.removeAndAdd();
  }


  getdatabyId(id:any ,name:any , bool:any){
    console.log('clicked' , id ,name ,bool );
    this.storedId = id;
    this.getid1(id)

    this.parentData = {id:id , name:name , bool:bool};
    this.practiceChildComponent.getData()
  }

  getid1(idget:any){
    console.log("1nd function", idget)
    this.getid2(idget)
  }

  getid2(idget:any){
    console.log("2nd function", idget);
    this.getid3(idget)
  }
  getid3(idget:any){
    console.log("3nd function", idget)
    this.getid4(idget)
  }
  getid4(idget:any){
    console.log("4nd function", idget)
    this.getid5(idget)
  }
  getid5(idget:any){
    console.log("5nd function", idget)
  }


//
valueGet(){
  const value = this.responsce?.arra[0]?.array[0]?.name[0]?.name1;
  console.log(value)
}

updateData:typeDefine = new typeDefine()




filldata(){
this.updateData.id = "2";
 this.updateData.parentUserId= "dfdfdf";
 this.updateData.roleName = "ddf";
 this.updateData.isActive =true;
 this.updateData.isDeleted =true;
 this.updateData.isDefault =true;
 this.updateData.moduleName ="dfdfd";
 this.updateData.isSystemGeneratedRole= true;

 delete this.updateData.roleName
 this.updateData
}


removeAndAdd(){
  const array =  this.arrayObj
//  const obj = this.arrayObj[0];
//  console.log(obj)
//  obj.isExpand = true;
//  console.log(obj)

 this.arrayObj.map((x)=>{
  x.isExpand = true;
 delete x.shh;
 x.id = x.id*2
 })

 console.log( this.arrayObj);
}

}


/*
Array
 array method

# map =  1 loop  ,2 modification;

# filter =  1 loop , 2 filter;
# for    = 1 loop,
# foreaech = 1 loop
# traditionFor = 1 loop

# inclueds      = array chya andr check ki ti value present ahe ka , asel tr true nhi asel tr false

removeAndAdd(){
  const array =  this.arrayObj
//  const obj = this.arrayObj[0];
//  console.log(obj)
//  obj.isExpand = true;
//  console.log(obj)

 this.arrayObj.map((x)=>{
  x.isExpand = true;
 delete x.shh;
 x.id = x.id*2
 })

 console.log( this.arrayObj);
}
*/
