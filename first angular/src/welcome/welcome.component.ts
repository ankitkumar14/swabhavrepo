import { Component } from '@angular/core';
import {sumnum} from '../source/add.services'
@Component({
  selector: 'app-root',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class welcomeComponent {
  title = 'welcome';
  sum:number=0;
  mytext="my name is ankit";
  mess='message from parent to child';
  messfromchild:string;
  constructor(s:sumnum)
  {
    this.sum=s.m(1,2,3,5)
  }
  getmess($event:any){
    this.messfromchild=$event;
  }
}
