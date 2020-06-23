import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  history=[];
  balance:number;
  constructor(private s:MyService) {
    this.history=s.getHistory()
    this.balance=s.getCurrentSaving();
   }
    
  ngOnInit() {
  }

}
