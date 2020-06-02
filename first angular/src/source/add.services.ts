import { Injectable } from '@angular/core';

@Injectable({ providedIn : 'root'})

export class sumnum{
    constructor(){}
    m(...num:number[]):number {
        let sum:number;
        sum=0;
        for(let val of num)
        {
            sum+=val;
        }
        return sum;
    }
}