import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ CountdownComponent } from '../app/countdown/countdown.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';

const routes: Routes = [
  {path: 'Countdown', component: CountdownComponent},
  {path: 'ProfileCard', component: ProfilecardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
