import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { signUpComponent } from "./sign-up/sign-up.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { DashboardContentComponent } from "./dashboard-content/dashboard-content.component";
import { EditEventComponent } from "./edit-event/edit-event.component";
import { MyEventsComponent } from "./my-events/my-events.component";

export const appRoutes: Routes = [
  { path: "signUpForm", component: signUpComponent },
  { path: "loginForm", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "dashboardContent", component: DashboardContentComponent },
      { path: "editEvent", component: EditEventComponent },
      { path: "createEvent", component: CreateEventComponent },
      { path: "myEvents", component: MyEventsComponent }
    ]
  },
  { path: "", redirectTo: "loginForm", pathMatch: "full" }
];
