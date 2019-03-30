import { Component, OnInit } from '@angular/core';
import { CustomNavigationCard } from '../entity/custom-navigation-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paintingsNavCard: CustomNavigationCard = {
    title: 'Schilderijen',
    content: null,
    imageSource: "assets/cavia1.jpg",
    routerLink: '/schilderijen'
  };

  universeNavCard: CustomNavigationCard = {
    title: 'Gravitatie',
    content: null,
    imageSource: "assets/cavia1.jpg",
    routerLink: '/schilderijen'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
