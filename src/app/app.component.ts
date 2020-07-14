import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor(){
    this.contador = 10;
  }

  // tslint:disable-next-line: typedef
  incrementar(){
    this.contador++;
  }

  // tslint:disable-next-line: typedef
  decrementar(){
    this.contador--;
  }
}
