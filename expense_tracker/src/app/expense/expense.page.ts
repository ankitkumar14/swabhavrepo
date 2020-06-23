import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {
  totalSaving:number;
  currentSaving:number;
  totalExpense:number;
  constructor(private s:MyService) {
    this.totalSaving=s.getTotalSaving();
    this.currentSaving=s.getCurrentSaving();
    this.totalExpense=s.getTotalExpense();
   }

  ngOnInit() {
  }

}
