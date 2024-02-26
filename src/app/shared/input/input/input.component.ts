// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { AbstractControl } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-input',
//   templateUrl: './input.component.html',
//   styleUrls: ['./input.component.css'],
// })
// export class InputComponent implements OnInit {

//   @Input() inputLabel?: string;
//   @Input() inputType?: string;
//   @Input() inputValue?: string;
//   @Input() inputName?: string;
//   @Input() inputRequired?: any;
//   @Input() inputMinLength?: any;

//   get isInvalid(): boolean {
//     return this.inputRequired && !this.inputValue;
//   }

//   get minLengthInvalid(): boolean {
//     return this.inputMinLength && this.inputValue && this.inputValue.length < this.inputMinLength;
//   }

//   constructor() {};
//   ngOnInit(): void {
//   }
//   ngAfterViewInit(): void {
//    let a =  document.getElementById('hidden')
//    if(a!= null){
//     a.focus()
//    }
//   }


// }
import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  // template: `<input type="text" [(ngModel)]="value">`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  styleUrls: ['./input.component.css']
})
export class InputComponent implements ControlValueAccessor {
  // @Input() inputLabel?: string;
  // @Input() name?: string;
  // @Input() inputType?: string;
  // @Input() inputValue?: any;
  // @Input() inputReqValidation?: any;
  // @Input() inputMinLength?: any;

  // control: NgControl;
  // submitted = false;

  // constructor(public ngControl: NgControl) {
  //   this.control = ngControl;
  // }
  constructor() {

  }


  // @Input() label: string = '';
  // @Input() type: string = 'text';
  // @Input() name: string = '';
  // @Input() isRequired: boolean = false;
  // @Input() minLength: number = 0;
  // @Input() maxLength: number = 100;
  // @Input() showValidation: boolean = true;
  // @Input() formControl: any = null; // We will use this to receive the form control from the parent component
  // value: any = '';
  @Input()value?: string;
  @Input()name?:any;

  ngOnInit() {}




  onChange = (_: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }

  onInputChange(event: any): void {
    if(event != null){
    this.value = event.target.value;
    this.onChange(this.value); // notify the parent that the value has changed
    this.onTouched(); // notify the parent that the input has been touched
  }}


}
