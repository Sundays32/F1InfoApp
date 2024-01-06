import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './teams/team/team.component';
import { RedbullComponent } from './teams/redbull/redbull.component';
import { MercedesComponent } from './teams/mercedes/mercedes.component';
import { FerrariComponent } from './teams/ferrari/ferrari.component';
import { MclarenComponent } from './teams/mclaren/mclaren.component';
import { AstonMartinComponent } from './teams/aston-martin/aston-martin.component';
import { AlpineComponent } from './teams/alpine/alpine.component';
import { WilliamsComponent } from './teams/williams/williams.component';
import { AlphaTauriComponent } from './teams/alpha-tauri/alpha-tauri.component';
import { AlfaRomeoComponent } from './teams/alfa-romeo/alfa-romeo.component';
import { HaasComponent } from './teams/haas/haas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    TeamsComponent,
    TeamComponent,
    RedbullComponent,
    MercedesComponent,
    FerrariComponent,
    MclarenComponent,
    AstonMartinComponent,
    AlpineComponent,
    WilliamsComponent,
    AlphaTauriComponent,
    AlfaRomeoComponent,
    HaasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
