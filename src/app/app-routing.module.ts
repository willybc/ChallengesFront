import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ CountdownComponent } from '../app/countdown/countdown.component';

const routes: Routes = [
  {path: 'Countdown', component: CountdownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
