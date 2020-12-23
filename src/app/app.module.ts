import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Inicio Servicio
import { UpdscriptsService } from "./updscripts.service";
import { CountdownComponent } from './countdown/countdown.component'
//Fin Servicio

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UpdscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
