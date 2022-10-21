import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { ServiceService } from '../service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user:User=new User();
  emailId:String="rajashi";

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.service.updatedetails(this.emailId,this.user).subscribe(
     ( data)=>{
      alert("successfully updated");

          this.gotolist(); 

      },

      
    );
    
  }
  gotolist()
  {
    this.router.navigate(['userlist']);
  }


}
