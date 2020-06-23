import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { student } from 'src/app/student';
import { GetdataService } from 'src/app/getdata.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss'],
})
export class UpdateStudentComponent implements OnInit {
  id:number;
  studentlist=new student;
  loader:boolean=true;
  constructor(private route:ActivatedRoute,
    private s:GetdataService,
    private router:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id)
    this.getStudentById(this.id);
  }
  studentdata=new student;
  getStudentById(id){
    this.s.getStudentById(id).then((result)=>{
      this.studentlist=JSON.parse(result.data);
      
      this.studentdata=this.studentlist[0]
      this.loader=false;
      console.log(this.studentlist);
    }).catch((error)=>{
      console.log(error);
    })
  }
  onSubmit(){
    this.router.navigate([''])
    this.s.updateStudents(this.id,this.studentdata);
  }
}
