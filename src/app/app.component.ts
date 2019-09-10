import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router) {}

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



}


