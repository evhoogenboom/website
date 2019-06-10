import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { HealthComponent } from './health/health.component';
import { GravitationComponent } from './gravitation/gravitation.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'paintings', component: PaintingsComponent},
  {path: 'health', component: HealthComponent},
  {path: 'gravitation', component: GravitationComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
