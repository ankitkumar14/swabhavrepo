import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  ans:number;
  str:string;
  arr=[];
  temp=[];
  constructor(private storage: Storage) { 
  }
  addSaving(amount){
    
    this.str="you added "+JSON.stringify(amount);
    this.arr=JSON.parse(localStorage.getItem('history'));
    if(this.arr==null){
      this.temp[0]="ALL HISTORY";
      this.temp[1]=this.str;
      this.arr=this.temp;
      localStorage.setItem('history',JSON.stringify(this.arr));
    }
    else
    {
      this.arr.push(this.str);
      localStorage.setItem('history',JSON.stringify(this.arr));
    }
    localStorage.setItem('totalSaving',amount+JSON.parse(localStorage.getItem('totalSaving')));
    localStorage.setItem('currentSaving',JSON.parse(localStorage.getItem('totalSaving')));
    //localStorage.clear();
  }
  getCurrentSaving(): number {
    return JSON.parse(localStorage.getItem('currentSaving'));
  }
  getTotalSaving():number{
    return JSON.parse(localStorage.getItem('totalSaving'));
  }
  addExpense(amount){
    this.ans=JSON.parse(localStorage.getItem('currentSaving'))-amount;
    localStorage.setItem('totalExpense',amount+JSON.parse(localStorage.getItem('totalExpense')));
    localStorage.setItem('currentSaving',JSON.stringify(this.ans));
  }
  getTotalExpense():number{
    return JSON.parse(localStorage.getItem('totalExpense'));
  }
  addReason(amount,reason){
    this.str="for "+reason+" you spend "+JSON.stringify(amount);
    this.arr=JSON.parse(localStorage.getItem('history'));
    if(this.arr==null){
      this.temp[0]="ALL HISTORY";
      this.temp[1]=this.str;
      this.arr=this.temp;
      localStorage.setItem('history',JSON.stringify(this.arr));
    }
    else
    {
      this.arr.push(this.str);
      localStorage.setItem('history',JSON.stringify(this.arr));
    }
  }
  getHistory():Array<string>{
    return JSON.parse(localStorage.getItem('history'));
  }
}
