import { Component , OnInit, Input ,Output ,EventEmitter} from '@angular/core';

@Component({
    selector: 'welcome-child',
    templateUrl: './child.component.html'
  })

export class ch implements OnInit {
    constructor(){

    }
    
    ngOnInit(){

    }
    @Input() message:string;
    @Output() messemit = new EventEmitter<string>();
    text= "my child class";
    messagetop:string= "meassage to parent";
    num:number=56;
    sendMessageToParent(message: string) {
        this.messemit.emit(message);
    }
}