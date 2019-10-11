import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Salve amigos, como estão?</h1>

  <button (click)="myEvent($event)">Meu botão</button>
  <BR />
  <button (mouseenter)="myEvent($event)">Meu segundo botão</button>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myEvent(){
  	console.log(event);
  }
  
}
