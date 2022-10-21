import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  firsttitle="interpolation"
  secondtitle="propertybinding"
  btntype=false;
  name:any;

  constructor() { }

  ngOnInit(): void {
  }

  changefirsttitle()
  {
    this.firsttitle="this is interpolation applied event binding"
  }

}
