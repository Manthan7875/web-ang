import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCalendar, NgbCarousel, NgbConfig, NgbDate, NgbDateStruct, NgbInputDatepickerConfig, NgbModal, NgbModalOptions,  NgbModalRef, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { RemarkComponent } from '../compmodel/remark/remark.component';
import { MainpageService } from '../mainservices/mainpage.service';
import { RootObject } from './remark-modal.model';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[NgbInputDatepickerConfig]
})
export class MainComponent implements OnInit {
  rootObject = new RootObject();
  form : FormGroup = new FormGroup({});
  showoneTwo:number = 1;
  show : boolean = true;
  btnShowHide : boolean = true;
  constructor(private modalservice:NgbModal ,
    private fb : FormBuilder ,
    public service:MainpageService ,
    public router : Router,
    config: NgbInputDatepickerConfig,
    calendar: NgbCalendar ) {
          // customize default values of datepickers used by this component tree
      config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // weekends are disabled
    // config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;

    // setting datepicker popup to close only on click outside
    config.autoClose = 'outside';

    // setting datepicker popup to open above the input
    config.placement = ['top-start', 'top-end'];

    this.form = this.fb.group({
      name : ['', [Validators.required]],
      email : ['',[Validators.required]]
    })
    }
      // Date picker =>
  model!: NgbDateStruct;


    users:any=[];
    ngOnInit(){
      var entireData = this.service.getUser();
      entireData.subscribe((data) => {
        console.warn(data);
        this.users = data;

  });

    }
  setDropdown(rootObject:RootObject){
this.rootObject = rootObject
  }


  openRemarkModel(){
    const size ="md";

    this.modalservice.open(RemarkComponent)
  }



// data send to parent to child
  trans!: string;


  //Legend Form
//form mouseover
mouserOver(event:any){
console.log(event)
if(this.form.invalid){
  Object.keys(this.form.controls).forEach(field => {
    const control = this.form.get(field);
    control?.markAsTouched({ onlySelf: true });
  });
}

if(event.target.id == 'one'){
  this.showoneTwo=1
} else if (event.target.id == 'two'){
  this.showoneTwo = 2
}
};

submit(){
  this.form.value;
  this.service.behaviourSubject.next(this.form.value);
  this.router.navigate(['/practice'])
  // window.alert("! Tu Karoon Dakhival ! ha ha ha")
}
mouserOve(event:any){
  if(this.form.invalid){
    this.show = false;
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control?.markAsTouched({ onlySelf: true });
      // let a = (<HTMLButtonElement>document.getElementById('submit')).innerHTML ="Aata thik ahe";
      console.log(event);
      this.btnShowHide = false;
      // event.target.innerHTML = "Aata Thik Ahe"

    });
  }

}


//ngb Modal;

openFirstModal(){
  const modalOptions: NgbModalOptions = {
    size: 'lg',
    windowClass:'popUp1Modal'

  };
  this.modalservice.open('Pop1Component', modalOptions)

}
openSecondModal(){
  const modalOptions: NgbModalOptions = {
    size: 'lg',
  };
  this.modalservice.open('Pop2Component', modalOptions)

}
openThirdModal(){
  const modalOptions: NgbModalOptions = {
    size: 'lg'
  };
  this.modalservice.open('Pop3Component', modalOptions)
}
}
