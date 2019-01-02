import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { updateEventService} from "src/app/dashboard-content/services/updateEvent.service";

@Injectable({
  providedIn: "root"
})
export class EditEventService {


  url = "http://localhost:3005/editEvent";

  constructor(private http: HttpClient) {}
  getEvent(eventId: any) {
    return this.http.post<any>(this.url, eventId);  
  }

  

  // eventData(){
  //   return this.updateEventService.getUserDataObj()
  // }
}
