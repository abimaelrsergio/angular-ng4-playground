import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Salve amigos, como estão?</h1>
  <p>Como vai a vida?</p>

  <ul>
  	<li *ngIf="myArr; else outroTemplate">Sim, eu existo</li>
  </ul>

  <ng-template #outroTemplate>Não, eu não</ng-template>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myArr = "Alguma coisa diferente";
}
