import { Component, OnInit } from '@angular/core';
import { CustomNavigationCard } from '../entity/custom-navigation-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public router: Router) { }

  ngOnInit() {
  }

  onPaintingsClick() {
    this.router.navigateByUrl('/paintings');
  }

  onGravitationClick() {
    this.router.navigateByUrl('/gravitation');
  }

  onMotorClick() {
    this.router.navigateByUrl('/motor');
  }

  onContactClick() {
    this.router.navigateByUrl('/contact');
  }

  onHealthClick() {
    // this.router.navigateByUrl('/health');
  }




}
