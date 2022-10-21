import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from './student';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 constructor(private http:HttpClient) { }
 httpOptionsPost = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods' : 'GET, POST,PUT, OPTIONS',
    'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
  })
};


 public userloginFromRemote(user:User):Observable<any>
 {
  return this.http.post<any>("http://localhost:4000/user/setuser",user,this.httpOptionsPost)

 } 
 
 public getDetails():Observable<User[]>
 {
  return this.http.get<User[]>("http://localhost:4000/user/getuser");

 }

 public updatedetails(emailId:String|undefined,user:User):Observable<any>
 {
  return this.http.put<any>("http://localhost:4000/user/updateuser/"+emailId,user)
 }

 public viewstudent():Observable<Student[]>
 {
  return this.http.get<Student[]>("http://localhost:4000/student/getstudent");
 }

 public createstudent(student:Student):Observable<any>
 {
  return this.http.post<any>("http://localhost:4000/student/setstudent",student);
 }

 public updatestudent(student:Student,sid:number):Observable<object>
 {
  return this.http.put<object>("http://localhost:4000/student/updatestudent/"+sid,student);
 }

 public getbyid(sid:number):Observable<Student>
 {

  return this.http.get<Student>("http://localhost:4000/student/getbyid/"+sid);
 }

 public deletestudent(sid:number):Observable<any>
 {
  return this.http.delete<any>("http://localhost:4000/student/deletestudent/"+sid);
 }

}
