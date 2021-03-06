import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatToolbarModule, MatCardModule, MatSnackBarModule, MatTableModule,
  MatGridListModule,
  MatIconModule, MatDividerModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { PaintingsComponent } from './paintings/paintings.component';
import { HealthComponent } from './health/health.component';
import { GravitationComponent } from './gravitation/gravitation.component';
import { MotorComponent } from './motor/motor.component';
import { ContactComponent } from './contact/contact.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaintingsComponent,
    HealthComponent,
    GravitationComponent,
    MotorComponent,
    ContactComponent,
    CollectionPageComponent,
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
    MatIconModule,
    AppRoutingModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
