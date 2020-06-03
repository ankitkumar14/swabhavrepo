import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnkitfooter]'
})
export class AnkitfooterDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
 }

}
