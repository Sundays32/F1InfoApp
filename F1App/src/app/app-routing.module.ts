import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'', redirectTo:'/landingPage', pathMatch:'full'},
  { path:'landing-page', component: LandingPageComponent },
  { path: 'teams-page', component: TeamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
