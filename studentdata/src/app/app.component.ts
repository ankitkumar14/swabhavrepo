import { Component } from '@angular/core';
import { getdata } from 'src/services/getstudentdata.service';
import { student } from './student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  xtra=[];
  constructor(private s:getdata)
  {
  }
  getstudent(){
    //this.s.students().then( (r) =>{
      //console.log("com");
    //this.data=r;
    this.s.students();
    this.xtra=this.s.transfer();
  }
}
