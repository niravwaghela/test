import { Component, OnInit } from "@angular/core";
import { MyEventService } from "./myEvent.service";
import { GrowlService } from "../growl.service";

@Component({
  selector: "app-my-events",
  templateUrl: "./my-events.component.html",
  styleUrls: ["./my-events.component.css"]
})
export class MyEventsComponent implements OnInit {
  constructor(
    private myEvents: MyEventService,
    private growlService: GrowlService
  ) {}
  user: any;
  data = [];
  loggedInUser = {};

  ngOnInit() {
    this.user = localStorage.getItem("user");
    this.loggedInUser = {
      loggedInId: this.user
    };
    this.myEvents.getMyEvents(this.loggedInUser).subscribe(resp => {
      console.log(resp);
      this.data = resp;
    });
  }

  deleteEvent(index: number) {
    console.log(index);
    let eventIdDel = {
      eventId: this.data[index]._id
    };
    console.log(eventIdDel.eventId);

    this.myEvents.deleteEvents(eventIdDel).subscribe(resp => {
      console.log(resp);
      this.myEvents.getMyEvents(this.loggedInUser).subscribe(resp => {
        this.data = resp;
      });

      this.growlService.addSingle(`${resp.message}`);
    });
    // console.log(this.data[index]._id)
  }
}
