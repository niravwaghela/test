import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { signUpComponent } from "./sign-up/sign-up.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { signUpService } from "./sign-up/services/signup.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { loginService } from "./login/services/login.service";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardContentComponent } from "./dashboard-content/dashboard-content.component";
import { allEventsService } from "./dashboard-content/services/allEvents.service";
import { CreateEventService } from "./create-event/services/createEvent";
import { RegisterUserService } from "./dashboard-content/services/registerUser.service";
import { TokenInterceptorService } from "./token-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    signUpComponent,
    LoginComponent,
    DashboardComponent,
    CreateEventComponent,
    NavbarComponent,
    DashboardContentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    signUpService,
    loginService,
    AuthGuard,
    allEventsService,
    CreateEventService,
    RegisterUserService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
