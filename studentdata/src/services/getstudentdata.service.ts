import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from 'src/app/student';


@Injectable({ providedIn : 'root'})

export class getdata{
    api:string="http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
    data=[];
    constructor(private http:HttpClient)
    {
    }
    students():Promise<any> {
        let promise=new Promise((resolve, reject)=>{
            this.http.get<student[]>(this.api)
            .toPromise()
            .then((response:any)=>
            {
                this.data=response.map((res:any)=>{
                return new student(
                res.Age,
                res.Date,
                res.Email,
                res.Id,
                res.Name,
                res.RollNo,
                res.isMale);
                }
            );
            resolve();
            }
            )
        .catch((err)=>{
            console.log(err);
            reject();
        }
        )
    });
    
        return promise;
    }
    transfer(){
       
        return this.data;
    }
}