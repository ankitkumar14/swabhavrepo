import { Component , OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  //styleUrls: ['./app.component.css']
})

export class child  implements OnInit {

    constructor(){

    }
    ngOnInit(){
    }
    @Input() data=[];

}