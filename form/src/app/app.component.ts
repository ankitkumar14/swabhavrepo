import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  student=[];
  studentdata={
    id:"",
    name:"",
    std:"",
    contact:""
  }
  onsubmit(){
    this.student[this.student.length]=JSON.parse(JSON.stringify(this.studentdata));
  }
}
