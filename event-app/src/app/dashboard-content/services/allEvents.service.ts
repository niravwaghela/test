import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class allEventsService {
  url = "http://localhost:3005/events";

  constructor(private http: HttpClient) {}
  allEvents() {
    return this.http.get<any>(this.url);
  }

}
