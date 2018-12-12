import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:ActivatedRoute ,private router:Router) { }
  showDashboard(){
    this.router.navigate(['dashboard/dashboardContent']),{relativeTo:this.route}
  }

  showCreateEvent(){
    this.router.navigate(['dashboard/createEvent']),{relativeTo:this.route}
  }
  clearStorage(){
    localStorage.clear();
  }
  ngOnInit() {
  }

}
