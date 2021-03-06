import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuatroComponent } from './exercicio04/exercicio04.component';
import { CincoComponent } from './exercicio05/exercicio05.component';
import { SeisComponent } from './exercicio06/exercicio06.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', component: QuatroComponent},
  { path: '05', component: CincoComponent},
  { path: '06', component: SeisComponent},
  { path: 'movies/:id', component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
