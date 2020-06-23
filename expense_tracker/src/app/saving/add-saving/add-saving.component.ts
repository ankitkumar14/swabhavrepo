import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from 'src/app/my.service';

@Component({
  selector: 'app-add-saving',
  templateUrl: './add-saving.component.html',
  styleUrls: ['./add-saving.component.scss'],
})
export class AddSavingComponent implements OnInit {

  constructor(private router:Router,
    private s:MyService) { }

  ngOnInit() {}
  amount:number=0;
  submit(){
    this.s.addSaving(this.amount);
    this.router.navigate([''])
  }
  
}
