import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CreateEventService {
  url = "http://localhost:3005/events";

  constructor(private http: HttpClient) {}

  createEvent(event: any) {
    return this.http.post<any>(this.url, event);
  }

//   createEvent(event: any) {
//     fetch(this.url, { method: 'POST', headers: {'Content-Type': 'application/json' }, body: JSON.stringify(event) }).then(res => res.json).then(res => {console.log(res);return res});
//   }
// }
}