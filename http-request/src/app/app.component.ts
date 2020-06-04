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
  n:number;
  t:any;
  constructor(private s:getnumber){
  }
  dosearch(num:number){
    this.n=num;
    this.loading = true;
    this.t=this.s.search(this.n).then( () => this.loading = false);
  }
}
