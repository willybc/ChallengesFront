import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ CountdownComponent } from '../app/countdown/countdown.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { HomeComponent } from './home/home.component';
import { PodRequestComponent } from './pod-request/pod-request.component' 

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Countdown', component: CountdownComponent},
  {path: 'ProfileCard', component: ProfilecardComponent},
  {path: 'PodRequest', component : PodRequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
