import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.page.html',
  styleUrls: ['./saving.page.scss'],
})
export class SavingPage implements OnInit {
  
  constructor(private s:MyService) {
    this.saving=this.s.getCurrentSaving()
   }
  
  ngOnInit() {}
  saving:number=0;
}
