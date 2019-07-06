import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
