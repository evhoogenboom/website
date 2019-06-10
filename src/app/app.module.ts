import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatSnackBarModule, MatTableModule,
  MatGridListModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { PaintingsComponent } from './paintings/paintings.component';
import { HealthComponent } from './health/health.component';
import { GravitationComponent } from './gravitation/gravitation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaintingsComponent,
    HealthComponent,
    GravitationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatGridListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
