import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrowlService } from '../growl.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route:ActivatedRoute ,private router:Router,private growlService : GrowlService) { }
  showDashboard(){
    this.router.navigate(['dashboard/dashboardContent']),{relativeTo:this.route}
  }

  showCreateEvent(){
    this.router.navigate(['dashboard/createEvent']),{relativeTo:this.route}
  }
  clearStorage(){
    this.growlService.addSingle('You are Logged Out!! Login to Continue')
    localStorage.clear();
  }
  ngOnInit() {
  }

}
