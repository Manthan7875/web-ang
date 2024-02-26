import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-child',
  templateUrl: './practice-child.component.html',
  styleUrls: ['./practice-child.component.css']
})
export class PracticeChildComponent implements OnInit {

@Input() fromParent:any;
  constructor() { }

  ngOnInit(): void {
  }


  getData(){
    console.log("Dhanshree turak komal");
  }

}
