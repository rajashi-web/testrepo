import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ServiceService } from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  

  constructor(private service:ServiceService,private router:Router) {
    this.getDetails();
   }

   userdetails:User[] |undefined;

  ngOnInit(): void {
    
    
   
  }

  getDetails()
  {
   this.service.getDetails().subscribe(
     (res)=>{
       console.log(res);
       this.userdetails=res;
       
      
     },
     (err)=>{
       console.log(err);
 
     }
     
   );
  }
  updatedetails(emailId:String|undefined) {
  this.router.navigate(['/updateuser/'+emailId]);
 }

}

 

  
  
