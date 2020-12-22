import { Component } from '@angular/core';

import { UpdscriptsService } from "./updscripts.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor ( private _UpdateScripts:UpdscriptsService){
    _UpdateScripts.Update(["app"]);
  }
}
