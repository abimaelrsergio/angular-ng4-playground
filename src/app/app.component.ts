import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Salve amigos, como estão?</h1>

  <button [disabled]="buttonStatus == 'enabled'">My Buton</button>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  buttonStatus = 'enabled';

}
