import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class loginService {
  url = "http://localhost:3005/login";

  constructor(private http: HttpClient) {}

  getToken(){
    return localStorage.getItem('token')
  }

  login(user: any) {
    return this.http.post<any>(this.url, user);
  }
}
