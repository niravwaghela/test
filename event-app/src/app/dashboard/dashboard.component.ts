import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<navbar></navbar> 
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }

  

}
