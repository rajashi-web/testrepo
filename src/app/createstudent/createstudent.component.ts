import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import { ServiceService } from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  student:Student=new Student();

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.service.createstudent(this.student).subscribe(
      (data)=>{
        
        alert("successfully created student");
        this.goto();
      }
    )
  }
  goto()
  {
    this.router.navigate(['thankyou']);
  }


}
