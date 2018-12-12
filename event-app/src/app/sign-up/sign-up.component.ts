import { Component } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { signUpService } from "./services/signup.service";
import { passwordValidator } from "./validator";
import { Router } from "@angular/router";

@Component({
  selector: "signUp",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class signUpComponent {
  userData: any;
  constructor(
    private fb: FormBuilder,
    private signUpService: signUpService,
    private router: Router
  ) {}

  signUpForm = this.fb.group(
    {
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", Validators.required],
      password: ["", Validators.required],
      cnfmPassword: ["", Validators.required]
    },
    { validator: passwordValidator }
  );

  onSubmit(signUpForm) {
    this.signUpService.signUp(signUpForm).subscribe(data => {
      console.log(data);
      // localStorage.setItem('token' , data.token)
      if (data.success === true) {
        this.router.navigate(["/loginForm"]);
      }
    });
    // if (this.userData.success) {
    //   this.router.navigate(["loginForm"]);
    // }
    this.signUpForm.reset();
  }
}
