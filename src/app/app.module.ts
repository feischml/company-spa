import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhyandvaluesComponent } from './whyandvalues/whyandvalues.component';
import { WhatComponent } from './what/what.component';
import { HowComponent } from './how/how.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WhyandvaluesComponent,
    WhatComponent,
    HowComponent,
    TeamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
