import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.component.html',
  styleUrls: ['./faq-accordion.component.sass']
})
export class FaqAccordionComponent implements OnInit {

  panelOpenState = false;

  constructor() { 
    document.body.style.height = "100vh";
    document.body.style.width = "100vw";

    document.body.style.backgroundColor = "rgb(154, 103, 232)";
  }

  ngOnInit(): void {
  }

  

}
