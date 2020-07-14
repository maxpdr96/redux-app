import { AppState } from './../../app.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './../contador.actions';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styles: [
  ]
})
export class FilhoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  // tslint:disable-next-line: typedef
  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }

  // tslint:disable-next-line: typedef
  dividir() {
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }

}
