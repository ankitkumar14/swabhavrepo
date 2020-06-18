import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { student } from '../student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {

  studentdata=new student;
  studentName=''
  constructor(private s:GetdataService,
    private router:Router) { }

  ngOnInit() {
    
  }
  
  onSubmit(){
    
    this.router.navigate([''])
    
    this.s.addstudent(this.studentdata);
   }

}
