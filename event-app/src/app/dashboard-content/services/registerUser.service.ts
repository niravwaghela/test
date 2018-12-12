import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RegisterUserService {
  url = "http://localhost:3003/eventsss";

  constructor(private http: HttpClient) {}
  register(event: any) {
    return this.http.post<any>(this.url, event);
  }
}
