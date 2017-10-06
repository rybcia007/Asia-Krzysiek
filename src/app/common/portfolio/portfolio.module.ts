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
import { BlogComponent } from './common/blog/blog.component';
import { RelationshipComponent } from './common/relationship/relationship.component';
import { ContactComponent } from './common/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    WeddingComponent,
    PartyComponent,
    BlogComponent,
    RelationshipComponent,
    ContactComponent
  ],
  imports: [
    Router_module,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [

  ],
  exports: [

  ]
})
export class PortfolioModule { }
