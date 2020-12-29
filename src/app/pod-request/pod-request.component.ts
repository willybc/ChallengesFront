import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pod-request',
  templateUrl: './pod-request.component.html',
  styleUrls: ['./pod-request.component.sass']
})
export class PodRequestComponent implements OnInit {

  constructor() { 
    document.body.style.backgroundColor = "rgb(17, 23, 37)";
    
    document.body.style.alignItems = "center";
    document.body.style.fontFamily = "Chivo, sans-serif";
    document.body.style.fontSize = "18px";
    document.body.style.color = "white";
    document.body.style.height = "100vh";
    document.body.style.width = "100vw";
    document.body.style.overflow = "hidden";
  }

  ngOnInit(): void {
  }

}
