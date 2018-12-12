import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CreateEventService } from "./services/createEvent";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"]
})
export class CreateEventComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private createEventService: CreateEventService,
    private router : Router,
    private route : ActivatedRoute
  ) {}
  getLocalUser:any
  event = this.fb.group({
    eventName: ["", [Validators.required, Validators.minLength(3)]],
    eventDescription: ["", [Validators.required, Validators.minLength(3)]],
    eventDuration: ["", Validators.required],
    eventLocation: [""],
    eventFees: ["", Validators.required]
  });
  onSubmit(event) {
    this.getLocalUser = localStorage.getItem('user')
    event.user = this.getLocalUser;
    console.log(event)

    this.createEventService.createEvent(event).subscribe(data => {
      console.log("success", data);
    });
    this.event.reset();
    this.router.navigate(['dashboard/dashboardContent']),{relativeTo:this.route}
  }

  ngOnInit() {}
}
