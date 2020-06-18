import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from 'src/app/getdata.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss'],
})
export class DeleteStudentComponent implements OnInit {
  id:number;
  loader:boolean=true;
  constructor(private route:ActivatedRoute,
    private s:GetdataService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.s.deletestudent(this.id)
    .then(result => {
      this.loader = false;
      console.log(result)}
    )
    .catch(error => console.log(error));
  }

}
