import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuatroComponent } from './exercicio04/exercicio04.component';

const routes: Routes = [
  { path: '', component: QuatroComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
