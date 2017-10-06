import { NgModule, QueryList } from '@angular/core/';
import { Routes, RouterModule } from '@angular/router/';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router_module } from './administration.router';

// ---------------- components
import { AuthorizationComponent } from './common/user/authorization/authorization.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AuthorizationComponent,
    DashboardComponent,
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
export class AdministrationModule { }