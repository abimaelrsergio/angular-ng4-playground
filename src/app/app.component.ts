import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Salve amigos, como estão?</h1>
  <p>Como vai a vida?</p>
  <p>{{ myObject.local }}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myObject = {
  	sexo: 'homem',
  	idade: 42,
  	local: 'Brazil'
  }
}
