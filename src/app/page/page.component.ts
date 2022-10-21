import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {User} from '../user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{

  user:User=new User();
  
  
  
  

  constructor(private service:ServiceService,private router:Router)
  {}
  ngOnInit():void {
    
    
  }

  
  

 onSubmit()
 {
  this.service.userloginFromRemote(this.user).subscribe(
    data=> console.log("form submitted successfully"),
    error=>console.log("exception arise")
);
  alert("form succesfully submitted");
  this.gotolist();
  
 }

 gotolist()
 {
  this.router.navigate(['thankyou']);
 }
 
 }

 
   
 
 
 



 
    
  
 

  


