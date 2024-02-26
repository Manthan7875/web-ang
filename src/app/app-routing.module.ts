import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemarkComponent } from './compmodel/remark/remark.component';
import { AgGridPracComponent } from './component/ag-grid-prac/ag-grid-prac.component';
import { DragUseComponent } from './component/dragable/drag-use/drag-use.component';
import { DragulaServeComponent } from './component/drago/dragula-serve/dragula-serve.component';
import { ExtraPractComponent } from './component/extraPract/extra-pract/extra-pract.component';
import { NgxDatatableComponent } from './component/ngx-table/ngx-datatable/ngx-datatable.component';
import { MainComponent } from './main/main.component';
import { RetailerinvoiceComponent } from './main/retailecrud/retailerinvoice/retailerinvoice.component';
import { FormsecComponent } from './pages/formsec/formsec.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { BootstrapFormsComponent } from './component/forms/bootstrap-forms/bootstrap-forms.component';
import { NgFormComponent } from './component/forms/ngForm/ng-form/ng-form.component';
import { SizeTouchComponent } from './component/sizeTochesPract/size-touch/size-touch.component';
import { CssGridComponent } from './component/cssGrid/css-grid/css-grid.component';
import { ExtraSubComponent } from './component/extra-sub/extra-sub.component';
import { PracticeComponent } from './component/practice/practice.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { BarcodeComponent } from './main/barcode/barcode.component';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { DragInsideComponent } from './main/drag-inside/drag-inside.component';

const routes: Routes = [
  {path:'' , component:DashboardComponent},
  {path:'main' , component:MainComponent},
  {path:'barcode' , component:BarcodeComponent},
  {path:'remarkModal' , component:RemarkComponent
},
{path:'retailerinvoice' , component: RetailerinvoiceComponent},

{path:'draguses' , component: DragUseComponent} ,

{path:'dragoservice' , component:DragulaServeComponent},

{path:'ngxTable' , component:NgxDatatableComponent}
,
{path: 'changes' ,component:ExtraPractComponent},

{path: 'agGrid' , component:AgGridPracComponent},
{path: 'forms' , component:BootstrapFormsComponent},
{path: 'forms/ngForm' , component:NgFormComponent},
{path: 'touch' , component:SizeTouchComponent},
{path: 'cssGridPract' , component:CssGridComponent},
{path: 'ext-sub' , component:ExtraSubComponent},
{path: 'practice' , component:PracticeComponent},
{path: 'dragInside' , component:DragInsideComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
