import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Inicio Servicio
import { UpdscriptsService } from "./updscripts.service";
import { CountdownComponent } from './countdown/countdown.component'
//Fin Servicio

import {MatTreeModule} from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    ProfilecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTreeModule,
  ],
  providers: [
    UpdscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
