import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { DragulaServeRoutingModule } from './dragula-serve-routing.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragulaServeRoutingModule,
    DragulaModule.forRoot(),
    NgbTooltipModule
  ]
})
export class DragulaServeModule { }
