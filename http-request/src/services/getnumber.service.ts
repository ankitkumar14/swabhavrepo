import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn : 'root'})

export class getnumber{
    api:string= 'https://www.numbersapi.com';
    result:string;
    constructor(private http:HttpClient){
    }
    search(term:number):Promise<any> {
        let promise=new Promise((resolve, reject)=>{
            let apiurl=`${this.api}/${term}`;
            this.http.get(apiurl)
            .toPromise()
            .then(response=>{
                console.log(JSON.stringify(response));
                //console.log(response.json());
                this.result=JSON.stringify(response);
                resolve();
            },
            msg => { // Error
                reject(msg);
                });
        }
        );
        return promise;
    }
}