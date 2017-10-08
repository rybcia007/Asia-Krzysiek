import { NgModule, QueryList } from '@angular/core/';
import { Routes, RouterModule } from '@angular/router/';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Router_module } from './administration.router';
import { SharedModule } from '../shared/shared.module';
// ---------------- components
import { AuthorizationComponent } from './common/user/authorization/authorization.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    Router_module,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AuthorizationComponent,
    DashboardComponent,
  ],
  providers: [

  ],
  exports: [

  ]
})
export class AdministrationModule { }