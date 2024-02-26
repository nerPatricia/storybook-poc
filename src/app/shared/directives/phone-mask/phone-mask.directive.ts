import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]',
  standalone: true,
})
export class PhoneMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) public onInputChange(
    event: InputEvent
  ): void {
    const value = (event.target as any).value;
    this.el.nativeElement.value = PhoneMaskDirective.applyPhoneMask(value);
  }

  static applyPhoneMask(value: string, min = 14): string {
    let formattedValue = value.replace(/\D/g, '');
    if (value.length > min) {
      formattedValue = formattedValue.replace(
        /^(\d{2})(\d{5})(\d{4})$/,
        '($1) $2-$3'
      );
    } else {
      formattedValue = formattedValue.replace(
        /^(\d{2})(\d{4})(\d{4})$/,
        '($1) $2-$3'
      );
    }

    return formattedValue;
  }
}
