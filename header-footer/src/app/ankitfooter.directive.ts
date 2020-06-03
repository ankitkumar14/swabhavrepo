import { Directive, ElementRef, Input ,OnInit } from '@angular/core';

@Directive({
  selector: '[appAnkitfooter]'
})
export class AnkitfooterDirective implements OnInit {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
 }
 @Input() f:string;
 ngOnInit(){
   console.log(this.f);
 }
}
