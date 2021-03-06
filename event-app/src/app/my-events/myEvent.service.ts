import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MyEventService {
  url = "http://localhost:3005/myEvents";

  constructor(private http: HttpClient) {}
  getMyEvents(userId: any) {
    return this.http.post<any>(this.url, userId);
  }
  deleteEvents(eventId: any) {
    console.log(eventId)
    return this.http.post<any>("http://localhost:3005/deleteEvent", eventId);
  }
}
