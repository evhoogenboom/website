import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Painting {
  precedence: number;
  title: string;
  shortDescription: String;
  longDescription: string;
  imageUrl: string;
}

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})

export class PaintingsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onViewCollectionClick() {
    this.router.navigateByUrl("/collection");
  }

}
