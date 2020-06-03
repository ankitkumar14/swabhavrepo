import { Component , Input ,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css']
})

export class headercomponent implements OnInit
{
  constructor(){

  }
  ngOnInit(){

  }
  @Input() htittle:string;
    
}