import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  name1:string;
  name2:string;
  show:boolean=false;
  ml:number=0;
  ans:number=0;
  constructor() {
  }

  showval(){
    console.log(this.name1);
    let count = 0;
    const obj = this.name2.split("");
    for(let str of this.name1){
      let idx = obj.findIndex(s => s === str);
      if(idx >= 0){
        count++;
        obj.splice(idx, 1);
      }
    }
  this.ml=count;
  console.log(count);
  this.ans=(((this.ml/this.name1.length)+(this.ml/this.name2.length))/2)*100;
  console.log(this.ans)
  }

/*match() {
  let count = 0;
  const obj = this.name2.split("");
  for(let str of this.name1){
    let idx = obj.findIndex(s => s === str);
    if(idx >= 0){
      count++;
      obj.splice(idx, 1);
    }
  }
  this.ml=count;
  console.log(count);
  this.ans=(((this.ml/this.name1.length)+(this.ml/this.name2.length))/2)*100;
  console.log(this.ans)
  this.s1=this.name1;
  this.s2=this.name2;
  this.show=true;
}*/
}
