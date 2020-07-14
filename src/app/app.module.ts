import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
