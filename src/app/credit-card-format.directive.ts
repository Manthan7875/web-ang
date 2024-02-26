import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';


@Directive({
  selector: '[creditCardFormat]',
})
export class CreditCardFormatDirective {
  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event.target.value'])
onInput(value: string) {
  this.ngControl.valueAccessor?.writeValue(
    this.format(value)
  );
}
format(value: string): string {
  if (!value) {
    return '';
  }

  const cleanedValue = value.replace(/[^0-9]/g, '');

  const parts = [];

  for (let i = 0; i < cleanedValue.length; i += 4) {
    parts.push(cleanedValue.substring(i, i + 4));
  }

  return parts.join('-');
}
}