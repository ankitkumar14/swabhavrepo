import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {
  amount:number=0;
  reason:string;
  constructor(private s:MyService,
    private router:Router) { }

  ngOnInit() {}
  submit(){
    this.s.addExpense(this.amount);
    this.s.addReason(this.amount,this.reason)
    this.router.navigate([''])
  }
}
