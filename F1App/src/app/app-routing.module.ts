import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeamsComponent } from './teams/teams.component';
import { RedbullComponent } from './teams/redbull/redbull.component';

const routes: Routes = [
  {path:'', redirectTo:'landing-page', pathMatch:'full'},
  { path:'landing-page', component: LandingPageComponent },
  { path: 'teams-page', component: TeamsComponent },
  { path: 'RedBull', component: RedbullComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
