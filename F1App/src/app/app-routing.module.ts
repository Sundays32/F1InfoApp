import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeamsComponent } from './teams/teams.component';
import { RedbullComponent } from './teams/redbull/redbull.component';
import { MercedesComponent } from './teams/mercedes/mercedes.component';
import { HaasComponent } from './teams/haas/haas.component';
import { AlfaRomeoComponent } from './teams/alfa-romeo/alfa-romeo.component';
import { AlphaTauriComponent } from './teams/alpha-tauri/alpha-tauri.component';
import { WilliamsComponent } from './teams/williams/williams.component';
import { AlpineComponent } from './teams/alpine/alpine.component';
import { AstonMartinComponent } from './teams/aston-martin/aston-martin.component';
import { MclarenComponent } from './teams/mclaren/mclaren.component';
import { FerrariComponent } from './teams/ferrari/ferrari.component';

const routes: Routes = [
  {path:'', redirectTo:'landing-page', pathMatch:'full'},
  { path:'landing-page', component: LandingPageComponent },
  { path: 'teams-page', component: TeamsComponent },
  { path: 'RedBull', component: RedbullComponent },
  { path: 'Mercedes', component: MercedesComponent },
  { path: 'Ferrari', component: FerrariComponent },
  { path: 'Mclaren', component: MclarenComponent },
  { path: 'AstonMartin', component: AstonMartinComponent },
  { path: 'Alpine', component: AlpineComponent },
  { path: 'Williams', component: WilliamsComponent },
  { path: 'AlphaTauri', component: AlphaTauriComponent },
  { path: 'AlfaRomeo', component: AlfaRomeoComponent },
  { path: 'Haas', component: HaasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
