import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
    this.router.navigateByUrl("/home");
  }

  onHomeClick() {
    this.router.navigateByUrl("/home");
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

  onMotorClick() {
    this.router.navigateByUrl("/motor");
  }

  onContactClick() {
    this.router.navigateByUrl("/contact");
  }

}


