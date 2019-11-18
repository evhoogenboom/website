import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { HealthComponent } from './health/health.component';
import { GravitationComponent } from './gravitation/gravitation.component';
import { MotorComponent } from './motor/motor.component';
import { ContactComponent } from './contact/contact.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'paintings', component: PaintingsComponent},
  {path: 'health', component: HealthComponent},
  {path: 'gravitation', component: GravitationComponent},
  {path: 'motor', component: MotorComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'collection', component: CollectionPageComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
