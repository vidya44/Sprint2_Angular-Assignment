import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/todos/1";
  constructor(private http : HttpClient) { };
  user(){
    return this.http.get(this.url);
   }
 
  users() :Observable<Users[]>{
     return this.http.get<Users[]>("/assets/db.json");
   }
  // saveEmployee(data : any){
  // //  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8'}) };
  // //   data=  JSON.stringify(data)
  //   return this.http.post("http://localhost:9090/addEmployee", data);
  // }
    //() :Observable<IEmployee1[]>{
    // return this.http.get<IEmployee1[]>("http://localhost:9090/getAllEmployee");
    }
//}