import { NgModule, QueryList } from '@angular/core/';
import { Routes, RouterModule } from '@angular/router/';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router_module } from './portfolio.router';
import { HomeComponent } from './common/home/home.component';
import { AboutComponent } from './common/about/about.component';
import { WeddingComponent } from './common/wedding/wedding.component';
import { PartyComponent } from './common/party/party.component';
import { HoneymoonComponent } from './common/honeymoon/honeymoon.component';
import { RelationshipComponent } from './common/relationship/relationship.component';
import { ContactComponent } from './common/contact/contact.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    WeddingComponent,
    PartyComponent,
    HoneymoonComponent,
    RelationshipComponent,
    ContactComponent
  ],
  imports: [
    SharedModule,
    Router_module,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [

  ],
  exports: [

  ]
})
export class PortfolioModule { }
