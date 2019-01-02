import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class updateEventService {
  url = "http://localhost:3005/editEvent";

  constructor(private http: HttpClient) {}
  getEvent(eventId: any) {
    return this.http.post<any>(this.url, eventId);  
  }

  private eventData;

  public setUserDataObj(val) {
    this.eventData = val;
    console.log(this.eventData)
  }

  public getUserDataObj() {
    return this.eventData;
  }
}
