import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {

  title="detect prime or not"
  number:any;
  primenumber()
  {
    
    

    for(let i=2;i<=(this.number/2);i++)
    {
      if(this.number%i==0)
      {
        console.log("it is not prime");
        break;
      }
      else{
        console.log("it is prime");
      }
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
