import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-neto',
  templateUrl: './neto.component.html',
  styles: [
  ]
})
export class NetoComponent implements OnInit {

  @Input() contador: number;
  @Output() contadorCambio = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  reset(){
    this.contador = 0;
    this.contadorCambio.emit(0);
  }

}
