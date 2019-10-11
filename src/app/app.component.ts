import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Salve amigos, como estão?</h1>
  <p>Como vai a vida?</p>
  <ul>
  	<li *ngFor="let arr of myArr">{{ arr }}</li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myArr = ['dele','dela','seus'];
}
