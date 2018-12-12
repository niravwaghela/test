import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { loginService } from "./services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  udata:any
  userEmail: any;

  constructor(private fb: FormBuilder, private loginService: loginService, private router: Router) {}
  loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  onSubmit(loginForm) {
    this.loginService.login(loginForm).subscribe(data => {
      console.log("success", data.success);
      console.log( "userdata" , data)
      // this.userEmail = data.email
      console.log(data.id)
      localStorage.setItem('user',data.id)
      localStorage.setItem("token", data.token);
      if(data.success === true){
      this.router.navigate(['/dashboard/dashboardContent'])
    }
    });
    this.loginForm.reset();
    // console.log(this.udata)
  }
}
