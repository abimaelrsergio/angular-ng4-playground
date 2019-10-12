import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  	<h1 [ngStyle]="titleStyles">Olá</h1>

  `,
  styles: [`
  	h1 {
  		text-decoration:underline;
  	}

  	.red-title {
  		color:red;
  	}

  	.large-title {
  		font-size:4em;
  	}

  `]
})
export class AppComponent {

  titleStyles = {
  	'color': 'red',
  	'font-size' : '4em'
  }
}
