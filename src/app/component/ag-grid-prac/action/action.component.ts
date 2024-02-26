import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { GridApi, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements ICellRendererAngularComp {
params :any;
  constructor() { }
  agInit(params: ICellRendererParams<any, any>): void {
    // throw new Error('Method not implemented.');
    this.params = params;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    throw new Error('Method not implemented.');
  }

  deleteRow(){
    console.log(this.params);
    this.params.api.applyTransaction({ remove: [this.params?.node?.data] });
  }
}
