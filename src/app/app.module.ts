import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component'
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { HomeComponent } from './home/home.component';
import { PodRequestComponent } from './pod-request/pod-request.component';
import { FaqAccordionComponent } from './faq-accordion/faq-accordion.component';

//Inicio Servicio
import { UpdscriptsService } from "./updscripts.service";

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    ProfilecardComponent,
    HomeComponent,
    PodRequestComponent,
    FaqAccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTreeModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
  ],
  providers: [
    UpdscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
