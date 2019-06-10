import { Component, OnInit } from '@angular/core';
import { CustomNavigationCard } from '../entity/custom-navigation-card';
import { Router } from '@angular/router';

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
    routerLink: '/paintings'
  };

  universeNavCard: CustomNavigationCard = {
    title: 'Gravitatie',
    content: null,
    imageSource: "assets/cavia1.jpg",
    routerLink: '/gravatation'
  };
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

  onPaintingsClick() {
    this.router.navigateByUrl("/paintings");
  }

  onHealthClick() {
    this.router.navigateByUrl("/health");
  }

  onGravitationClick() {
    this.router.navigateByUrl("/gravitation");
  }



}
