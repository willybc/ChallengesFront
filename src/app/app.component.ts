import { Component, OnInit } from '@angular/core';
import { UpdscriptsService } from "./updscripts.service"
import { Router} from '@angular/router';
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

}
