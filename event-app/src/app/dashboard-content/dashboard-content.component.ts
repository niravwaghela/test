import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { allEventsService } from './services/allEvents.service';
import { RegisterUserService } from './services/registerUser.service';

@Component({
  selector: 'dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
  
})
export class DashboardContentComponent implements OnInit {
  data = []
  user:any;
  
  createdEvent:any;
  constructor(private allEventService: allEventsService,private registerUserService : RegisterUserService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user')

     this.allEventService.allEvents().subscribe(response=>{
          this.data = response
          
     })

  }
  registerUser(index:number){
    this.createdEvent = this.data[index].user._id
    console.log(this.createdEvent)
    
    let registeredUser = {
      email: this.createdEvent,
      user:this.user
    }

    this.registerUserService.register(registeredUser).subscribe(data=>{
      console.log({success:data})
    })


  }
}
