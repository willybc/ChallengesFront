import { Component, OnInit } from '@angular/core';
import { UpdscriptsService } from "./updscripts.service"
import { Router} from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'app';

  constructor ( private _UpdateScripts:UpdscriptsService, private router:Router){
    _UpdateScripts.Update(["app"]);
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  folders: Section[] = [
    {
      name: 'Countdown',
      updated: new Date('12/21/20'),
    },
    {
      name: 'ProfileCard',
      updated: new Date('12/28/20'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

}
