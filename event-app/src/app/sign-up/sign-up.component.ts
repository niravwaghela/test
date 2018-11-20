import { Component } from "@angular/core";
import { FormControl, Validators,FormBuilder, AbstractControl, ValidatorFn, FormGroup, ValidationErrors} from "@angular/forms";
import { signUpService } from "./services/signup.service";
import { passwordValidator } from "./validator";

@Component({
    selector:'signUp',
    templateUrl:'./sign-up.component.html',
    styleUrls:['./sign-up.component.css']
})
export class signUpComponent{
    
    constructor(private fb:FormBuilder,private signUpService:signUpService){}

    
    //  chckpassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    //     const pass= this.signUpForm.get('password')
    //     console.log(pass)
    //     this.signUpForm;
    //     console.log(this.signUpForm)
    //     //const cnpass = control.get('passwordfield.cnfmPassword').value;
    //     //console.log(pass)     
    //      return null
    //   };

    signUpForm = this.fb.group({

        firstName: ['',[Validators.required,Validators.minLength(3)]],
        lastName: ['',[Validators.required,Validators.minLength(3)]],
        email: ['',Validators.required],
        password: ['',Validators.required],
        cnfmPassword: ['',Validators.required],
        
        },{Validator:passwordValidator})
    

    onSubmit(signUpForm){
        this.signUpService.signUp(signUpForm)
        .subscribe(
            data => console.log('success' , data),
            error => console.error('error', error)
        )
        this.signUpForm.reset();

    }
}    
    



