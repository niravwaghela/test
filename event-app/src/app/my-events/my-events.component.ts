import { Component, OnInit } from "@angular/core";
import { MyEventService } from "./myEvent.service";

@Component({
  selector: "app-my-events",
  templateUrl: "./my-events.component.html",
  styleUrls: ["./my-events.component.css"]
})
export class MyEventsComponent implements OnInit {
  constructor(private myEvents: MyEventService) {}
  user: any;
  data=[]

  ngOnInit() {
    this.user = localStorage.getItem("user");
    let loggedInUser={
      loggedInId : this.user
    }
    this.myEvents.getMyEvents(loggedInUser).subscribe(resp => {
      console.log(resp);
      this.data = resp
    });
  }
}
