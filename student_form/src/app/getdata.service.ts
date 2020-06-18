import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { student } from './student';
//import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  api: string = "https://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
  constructor(private http: HttpClient ,private nativehttp:HTTP) {
    
  }
  students(): Promise<any> {
    
      let promise = new Promise((resolve, reject) => {
        
          this.nativehttp.get(this.api,{}, { responseType: 'json' })
              .then((response: any) => {
                console.log(response.data)
                  resolve(response);
              }
              )
              .catch((err) => {
                  console.log(err);
                  reject(err);
              })
      });
      return promise;
}
addstudent(studentdata:student): Promise<student> {
  let promise=new Promise((resolve, reject) => {
      this.nativehttp.post(this.api,studentdata,{})
      
      .then( (res)=>  {
          resolve();
      }
      )
      .catch((err) => {
          console.log(err);
          reject(err);
      })
  });
  return ;
}
deletestudent(id:number) : Promise<any>{
  console.log(id);
  let url = `${this.api}/${id}`;
  let promise=new Promise((resolve, reject) => {
      this.nativehttp.delete(url,{},{})
      
      .then((response: any) => {
          resolve();
      }
      )
      .catch((err) => {
          console.log(err);
          reject(err);
      })
  }
  )
  return promise;
}
getStudentById(id): Promise<any> {
  let promise = new Promise((resolve, reject) => {
      this.nativehttp.get(this.api+"/"+id,{}, { responseType: 'json' })
          
          .then((response: any) => {
              resolve(response);
          }
          )
          .catch((err) => {
              console.log(err);
              reject(err);
          })
  });
  return promise;
}
updateStudents(id,data):Promise<any>
    {
        return new Promise((resolve,reject)=>
        {
            this.nativehttp.put(this.api+"/"+id,data,{responseType: 'json'})
            
            .then((response)=>{
               //console.log(response);
                resolve(response);
            })
            .catch((err)=>{
               // console.log(err)
                reject(err)
            })
        })
    }

}
