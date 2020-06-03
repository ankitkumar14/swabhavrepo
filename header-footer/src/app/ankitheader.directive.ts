import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnkitheader]'
})
export class AnkitheaderDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }

}
