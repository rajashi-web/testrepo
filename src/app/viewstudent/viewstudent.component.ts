import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {Router} from '@angular/router';
import {Student} from '../student';


@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  student!:Student[];


  constructor(private service:ServiceService,private router:Router) {
    this.viewlist();

   }

  ngOnInit(): void {
  }

  viewlist()
  {
    this.service.viewstudent().subscribe(
      (data)=>{
        
        this.student=data;
      }
    )
  }
  goto(sid:number)
  {
    this.router.navigate(['updatestudent/'+sid]);
  }

  delete(sid:number)
  {
    this.service.deletestudent(sid).subscribe(
      (data)=>{
        alert("successfully deleted");
        this.student=data;
      }
    )
  }


}



