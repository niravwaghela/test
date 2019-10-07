import { Component, OnInit } from "@angular/core";
import { allEventsService } from "./services/allEvents.service";
import { RegisterUserService } from "./services/registerUser.service";
import { Router, ActivatedRoute } from "@angular/router";
import { updateEventService } from "./services/updateEvent.service";
import { GrowlService } from "../growl.service";

@Component({
  selector: "dashboard-content",
  templateUrl: "./dashboard-content.component.html",
  styleUrls: ["./dashboard-content.component.css"]
})
export class DashboardContentComponent implements OnInit {
  data = [];
  user: any;

  createdEvent: any;
  constructor(
    private router: Router,
    private growlService: GrowlService,
    private route: ActivatedRoute,
    private allEventService: allEventsService,
    private registerUserService: RegisterUserService,
    private updateEventService: updateEventService
  ) {}

  ngOnInit() {
    this.user = localStorage.getItem("user");
    console.log(this.user);

    this.allEventService.allEvents().subscribe(response => {
      this.data = response.filter(event => this.user !== event.user._id);
      console.log(this.data);
    });
  }
  editEvent(index: number) {
    this.createdEvent = this.data[index];
    let eventDetails = {
      eventId: this.createdEvent
    };

    this.updateEventService.getEvent(eventDetails).subscribe(data => {
      this.updateEventService.setUserDataObj(data);
      this.router.navigate(["dashboard/editEvent"]), { relativeTo: this.route };
    });
  }
  registerUser(index: number) {
    this.createdEvent = this.data[index].user._id;

    let registeredUser = {
      eventUser: this.createdEvent,
      loggedInUser: this.user
    };

    this.registerUserService.register(registeredUser).subscribe(
      data => {
        this.data = data.filter(event => this.user !== event.user._id);
        console.log(data)
        this.growlService.addSingle("Registered");
        // this.allEventService.allEvents().subscribe(data => {
        //   this.data = data.filter(event => this.user !== event.user._id);
        // });
      },
      error => {
        this.growlService.showError(`${error.error.error}`);
      }
    );
  }
}
