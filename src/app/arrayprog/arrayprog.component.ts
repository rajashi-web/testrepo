import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-arrayprog',
  templateUrl: './arrayprog.component.html',
  styleUrls: ['./arrayprog.component.css']
})
export class ArrayprogComponent implements OnInit {

  array:number[]=new Array();
   traversing()
   {
    for(let i = 1; i <=100; i++) {
      let value =Math.floor(Math.random()*100) +1;
      console.log(value);
  }

   }

   getevenarray():any
   {
    for(let i=1;i<=10;i++)
    {
      let value =Math.floor(Math.random()*100)+1;
      this.array[i]=value;
      if(this.array[i]%2==0)
      {
        console.log(this.array[i]);
      }
      
      
    }
    
    

    

  }

   

  constructor() { }

  ngOnInit(): void {
  }

}
