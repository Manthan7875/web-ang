import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-bootstrap-forms',
  templateUrl: './bootstrap-forms.component.html',
  styleUrls: ['./bootstrap-forms.component.css']
})
export class BootstrapFormsComponent implements OnInit {
  formData = {
    email: '',
    password: ''
  };
  @ViewChild('myForm') myForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
    this.initFormValidation();
  }

  private initFormValidation(): void {
    const form = document.querySelector('.needs-validation') as HTMLFormElement;
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  }

  // onSubmit(): void {
  //   console.log('Form submitted:', this.formData);
  //   // You can add your form submission logic here
  // }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.formData);
      // You can add your form submission logic here
    } else {
      console.log('Form is invalid.');
    }}
}
