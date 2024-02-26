import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css']
})
export class NgFormComponent implements OnInit {
  // formData = {
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // };

  @ViewChild('myForm') myForm!: NgForm;
  @ViewChild('myForms') myForms!: NgForm;
  @ViewChild('form') form!: NgForm;

  myProperty?: string;
  password?: any;
  confirmPassword?: any;
  constructor() { }

  ngOnInit(): void {

    this.myForm.form.setValidators([
      Validators.required,
      this.matchingPasswords.bind(this)
    ]);
    this.myForm.form.controls['password'].setValidators([
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    ]);
    this.myForm.form.controls['confirmPassword'].setValidators([
      Validators.required
    ]);
  }

  matchingPasswords(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'mismatchedPasswords': true };
    }
    return null;
  }



  // onSubmit(): void {
  //   if (this.myForm.valid) {
  //     console.log('Form submitted:', this.formData);
  //     // You can add your form submission logic here


  //   } else {
  //     console.log('Form is invalid.');
  //   }}
    onSubmited(): void {
      if (this.myForms.valid) {
        console.log('Form submitted:', this.formData);
        // You can add your form submission logic here
      } else {
        console.log('Form is invalid.');
      }}


      email: string = '';
      // password: string = '';

      onSubmit(form: NgForm) {
        if (form.valid) {
          console.log('Form submitted successfully.');
        }
      }


      // submitForm(): void {
      //   if(this.myForm.valid){
      //     this.myForm.controls;
      //     console.log('Form submitted with value:', this.myProperty);
      //   }else{
      //     console.log('fill details', this.myForm.valid)

      //   }


      // }


      formData = {
        name: '',
        email: '',
        domain: ''
      };

      submitForm(form: NgForm) {
        if (form.invalid) {
          return;
        }

        // Form is valid, perform further actions here
        console.log(this.formData);
      }
}
