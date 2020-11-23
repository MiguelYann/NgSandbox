import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  @Input() format: string = '';

  constructor(private ref: ElementRef) {}

  @HostListener('blur') onBlur() {
    let valueOfUser = this.ref.nativeElement.value;

    this.ref.nativeElement.value =
      this.format === 'uppercase'
        ? (<string>valueOfUser).toUpperCase()
        : (<string>valueOfUser).toLowerCase();
  }
}
