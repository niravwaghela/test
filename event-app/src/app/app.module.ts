import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { signUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule} from '@angular/forms';
import {signUpService} from './sign-up/services/signup.service'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,signUpComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    HttpClientModule,CommonModule
    
  ],
  providers: [signUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
