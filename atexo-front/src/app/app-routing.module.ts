import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscrireComponent } from './component/inscrire/inscrire.component';

const routes: Routes = [
  { path: 'inscrire', component: InscrireComponent },
  { path: '', redirectTo: '/inscrire', pathMatch: 'full' }  // Route par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }