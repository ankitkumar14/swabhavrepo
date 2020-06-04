import { Directive, ElementRef ,Input , OnInit , Renderer2} from '@angular/core';

@Directive({
  selector: '[appAnkitheader]'
})
export class AnkitheaderDirective implements OnInit {

  constructor(private el: ElementRef,
    private renderer: Renderer2) {
    el.nativeElement.style.backgroundColor = 'yellow';
    //Renderer2.renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
    //el.nativeElement.setStyle(el.nativeElement, 'position', 'top');
 }
 @Input() h:string;
ngOnInit(){
  /*this.renderer.setStyle(this.el.nativeElement,
    'border-top',
    '2px dashed olive') */
  console.log(this.h);
}
}
