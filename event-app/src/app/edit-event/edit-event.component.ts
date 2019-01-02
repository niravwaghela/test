import { Component, OnInit } from '@angular/core';
import { updateEventService } from '../dashboard-content/services/updateEvent.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventData={}

  constructor(private updateEventService:updateEventService) { }

  ngOnInit() {
    this.eventData = this.updateEventService.getUserDataObj()
    console.log(this.eventData)
  }

  

}
