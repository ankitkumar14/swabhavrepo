import { Directive, ElementRef ,Input , OnInit} from '@angular/core';

@Directive({
  selector: '[appAnkitheader]'
})
export class AnkitheaderDirective implements OnInit {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }
 @Input() h:string;
ngOnInit(){
  console.log(this.h);
}
}
