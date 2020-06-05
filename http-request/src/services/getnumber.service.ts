import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn : 'root'})

export class getnumber{
    api:string= 'https://www.numbersapi.com';
    constructor(private http:HttpClient){
        //console.log("response");
    }
    search(term:number):Promise<any> {
        let promise=new Promise((resolve, reject)=>{
            let apiurl=`${this.api}/${term}`;
            this.http.get(apiurl,{responseType: 'json'})
            .toPromise()
            .then(response=>{
                console.log(response);
                resolve(response);
            })
            .catch((err)=>{
                console.log(err)
                reject(err)
            })
        }
        );
        return promise;
    }
}