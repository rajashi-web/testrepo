import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ServiceService } from '../service.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  student:Student=new Student();
  sid!:number;


  constructor(private service:ServiceService,private router:Router,private route:ActivatedRoute ) {}

  ngOnInit(): void {
    this.sid=this.route.snapshot.params['sid'];
    this.service.getbyid(this.sid).subscribe(
      (data)=>{
        this.student=data;
      }
    )
  }

  onSubmit()
  {
    this.service.updatestudent(this.student,this.sid).subscribe(
      (data)=>{
        
        alert("successfully update");
        this.gotolist();
        

      },
    );
  }
  gotolist()
  {
    this.router.navigate(['/viewstudentdetails'])
  }


}
