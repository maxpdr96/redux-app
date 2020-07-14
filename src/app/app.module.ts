import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';


// NgRx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { contadorReducer } from './contador/contador.reducer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetoComponent } from './contador/neto/neto.component';
import { FilhoComponent } from './contador/filho/filho.component';


@NgModule({
  declarations: [
    AppComponent,
    NetoComponent,
    FilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
