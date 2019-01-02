import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { loginService } from "./services/login.service";
import { Router } from "@angular/router";
import { GrowlService } from "../growl.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  udata: any;
  userEmail: any;

  constructor(
    private fb: FormBuilder,
    private growlService: GrowlService,
    private loginService: loginService,
    private router: Router
  ) {}
  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  onSubmit(loginForm) {
    this.loginService.login(loginForm).subscribe(data => {
      console.log("success", data.success);
      console.log("userdata", data);
      // this.userEmail = data.email
      console.log(data.id);
      console.log(data);

      localStorage.setItem("user", data.userData);
      localStorage.setItem("token", data.token);
      if (data.success === true) {
        this.growlService.addSingle(`Welcome ${data.userData}`)
        this.router.navigate(["/dashboard/dashboardContent"]);
      }
    }, error=>{
      this.growlService.showError(`${error.error.message}`) 
    });
    this.loginForm.reset();
    // console.log(this.udata)
  }
}
