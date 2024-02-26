import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerinvoiceRoutingModule } from './retailerinvoice-routing.module';
import { RetailerinvoiceComponent } from './retailerinvoice.component';
import { WebcamModule } from 'ngx-webcam';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    RetailerinvoiceComponent
  ],
  imports: [
    CommonModule,
    RetailerinvoiceRoutingModule,
    WebcamModule,
    NgxPrintModule
  ]
})
export class RetailerinvoiceModule { }
