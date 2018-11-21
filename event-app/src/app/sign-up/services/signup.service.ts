import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class signUpService {
  url = "http://localhost:3000/signUp";


  constructor(private http:HttpClient) { }
  signUp(user: any){
    
    return this.http.post<any>(this.url,user)
  }

}