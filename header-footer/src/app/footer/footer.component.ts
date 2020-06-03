import { Component ,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  //styleUrls: ['./footer.component.css']
})

export class footercomponent implements OnInit{
    
  constructor(){

  }
  ngOnInit(){

  }
  @Input() ftittle:string;
}