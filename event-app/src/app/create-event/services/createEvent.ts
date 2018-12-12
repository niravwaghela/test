import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CreateEventService {
  url = "http://localhost:3003/events";

  constructor(private http: HttpClient) {}
  createEvent(event: any) {
    return this.http.post<any>(this.url, event);
  }
}
