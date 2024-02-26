import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsecComponent } from './pages/formsec/formsec.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemarkComponent } from './compmodel/remark/remark.component';
import {HttpClientModule} from '@angular/common/http';
import { HerosectionComponent } from './pages/herosection/herosection.component';
import { RetailerinvoiceModule } from './main/retailecrud/retailerinvoice/retailerinvoice.module';
import { NgxPrintModule } from 'ngx-print';
import { DragUseModule } from './component/dragable/drag-use/drag-use.module';
import { DragUseComponent } from './component/dragable/drag-use/drag-use.component';
import { DragulaServeModule } from './component/drago/dragula-serve/dragula-serve.module';
import { DragulaServeComponent } from './component/drago/dragula-serve/dragula-serve.component';
import { DragulaModule } from 'ng2-dragula';
import { NgxDatatableComponent } from './component/ngx-table/ngx-datatable/ngx-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ExtraPractComponent } from './component/extraPract/extra-pract/extra-pract.component';
import { AgGridPracComponent } from './component/ag-grid-prac/ag-grid-prac.component';
import { AgGridModule } from 'ag-grid-angular';
import { CreditCardFormatDirective } from './credit-card-format.directive';
import { PhoneFormatDirective } from './phone-format.directive';
import { PopupsComponent } from './shared/Modal/popups/popups.component';
import { Pop1Component } from './shared/Modal/pop1/pop1.component';
import { Pop2Component } from './shared/Modal/pop2/pop2.component';
import { Pop3Component } from './shared/Modal/pop3/pop3.component';
import { BootstrapFormsComponent } from './component/forms/bootstrap-forms/bootstrap-forms.component';
import { NgFormComponent } from './component/forms/ngForm/ng-form/ng-form.component';
import { InputComponent } from './shared/input/input/input.component';
import { SizeTouchComponent } from './component/sizeTochesPract/size-touch/size-touch.component';
import { CssGridComponent } from './component/cssGrid/css-grid/css-grid.component';
import { ExtraSubComponent } from './component/extra-sub/extra-sub.component';
import { PracticeComponent } from './component/practice/practice.component';
import { PracticeChildComponent } from './component/practice/practiceChild/practice-child/practice-child.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';

// import { ToastrModule } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';
import { BarcodeComponent } from './main/barcode/barcode.component';
import {  DragDropModule } from '@angular/cdk/drag-drop';
import { ActionComponent } from './component/ag-grid-prac/action/action.component';
import { DragInsideComponent } from './main/drag-inside/drag-inside.component';
@NgModule({
  declarations: [
    AppComponent,
    FormsecComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    MainComponent,
    RemarkComponent,
    HerosectionComponent,
    DragUseComponent,
    DragulaServeComponent,
    NgxDatatableComponent,
    ExtraPractComponent,
    AgGridPracComponent,
    CreditCardFormatDirective,
    PhoneFormatDirective,
    PopupsComponent,
    Pop1Component,
    Pop2Component,
    Pop3Component,
    BootstrapFormsComponent,
    NgFormComponent,
    InputComponent,
    SizeTouchComponent,
    CssGridComponent,
    ExtraSubComponent,
    PracticeComponent,
    PracticeChildComponent,
    DashboardComponent,
    BarcodeComponent,
    ActionComponent,
    DragInsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RetailerinvoiceModule,
    NgxPrintModule,
    DragUseModule,
    DragulaServeModule,
    DragulaModule.forRoot(),
    NgxDatatableModule,
    ReactiveFormsModule,
    AgGridModule,
    NgChartsModule,
    DragDropModule,



    // ToastrModule.forRoot({preventDuplicates:true,maxOpened:1,autoDismiss:true , timeOut:700}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
