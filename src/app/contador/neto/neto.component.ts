import { AppState } from './../../app.reducers';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './../contador.actions';
@Component({
  selector: 'app-neto',
  templateUrl: './neto.component.html',
  styles: [
  ]
})
export class NetoComponent implements OnInit {

  @Input() contador: number;
  @Output() contadorCambio = new EventEmitter<number>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  // tslint:disable-next-line: typedef
  reset() {
    this.store.dispatch(actions.reset({ numero: 0 }));
  }

}
