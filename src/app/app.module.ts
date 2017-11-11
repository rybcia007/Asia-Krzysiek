import { BrowserModule } from '@angular/platform-browser';
import { NgModule, QueryList, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRouter } from './app.router';
import { AppComponent } from './app.component';
import { SharedModule } from './common/shared/shared.module';
import { PortfolioModule } from './common/portfolio/portfolio.module';
import { AdministrationModule } from './common/administration/administration.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    PortfolioModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    appRouter,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
