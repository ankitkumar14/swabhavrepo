import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'mypipe'})
export class mp implements PipeTransform{
    transform(value:string):string{
        let str:string;
        str=value[0].toUpperCase();
        for(let i=1;i<value.length;i++)
        {
            if(value[i]==" ")
            {
                str+=value[i];
                i++;
                str+=value[i].toUpperCase();
            }
            else{
                str+=value[i];
            }
        }
        return str;
    }
}