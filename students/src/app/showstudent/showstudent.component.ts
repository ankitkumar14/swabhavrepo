import { Component, OnInit } from '@angular/core';
import { getdata } from 'src/services/getstudent.service';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.css']
})
export class ShowstudentComponent implements OnInit {

  constructor(private s:getdata) { }
  loader:boolean=true;
  studentlist=[];
  ngOnInit(): void {
    this.s.students().then((result)=>{
      this.studentlist=result;
      this.loader = false;
    }).catch((error)=>{
      console.log(error);
    })
  }
}
