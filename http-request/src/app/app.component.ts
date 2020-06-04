import { Component } from '@angular/core';
import { getnumber } from 'src/services/getnumber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-request';
  loading: boolean = false;
  result:string;
  constructor(private s:getnumber){
  }
  dosearch(num:number){
    this.loading = true;
    this.s.search(num).then( (r) =>{ 
      this.loading = false;
      this.result=r;
    })
    .catch((err)=>{
      
    })
    ;
  }
}
