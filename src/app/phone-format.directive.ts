import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';


@Directive({
  selector: '[PhoneFormat]'
})
export class PhoneFormatDirective {
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

  const areaCode = cleanedValue.substring(0, 3);
  const exchangeCode = cleanedValue.substring(3, 6);
  const lineNumber = cleanedValue.substring(6, 10);

  if (cleanedValue.length < 4) {
    return `(${areaCode}`;
  } else if (cleanedValue.length < 7) {
    return `(${areaCode})${exchangeCode}`;
  } else {
    return `(${areaCode})${exchangeCode}-${lineNumber}`;
  }
}

}
