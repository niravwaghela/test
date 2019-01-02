import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p-toast></p-toast>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
