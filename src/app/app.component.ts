import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Salve amigos, como estão?</h1>
  <p>Como vai a vida?</p>

  <div *ngIf="myArr; then template1 else template2"></div>

  <ng-template #template1>Verdadeiro</ng-template>
  <ng-template #template2>Falso</ng-template>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myArr = true;
}
