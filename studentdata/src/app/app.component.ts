import { Component } from '@angular/core';
import { getdata } from 'src/services/getstudentdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  xtra=[];
  loading:boolean =false;
  constructor(private s:getdata)
  {
  }
  getstudent(){
    this.loading = true;
    this.s.students().then((result)=>{
      this.xtra=result;
      this.loading = false;
    }).catch((error)=>{
      console.log(error);
    })
  }
}
