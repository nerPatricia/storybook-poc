import { ElementRef } from '@angular/core';
import { PhoneMaskDirective } from './phone-mask.directive';

describe('CloseModalDirective', () => {
  let elementRef: ElementRef;
  it('should create an instance', () => {
    const directive = new PhoneMaskDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
