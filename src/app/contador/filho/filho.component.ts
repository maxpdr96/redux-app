import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styles: [
  ]
})
export class FilhoComponent implements OnInit {

  @Input() contador:number;
  @Output() cambioContador = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(){
    this.contador *=2;
    this.cambioContador.emit(this.contador);
  }

  dividir(){
    this.contador /=2;
    this.cambioContador.emit(this.contador);
  }

}
