import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.page.html',
  styleUrls: ['./show-student.page.scss'],
})
export class ShowStudentPage implements OnInit {

  constructor(private s:GetdataService) { }

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
