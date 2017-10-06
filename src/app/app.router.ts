import { ROUTES_PATHS } from './app.path';
import { ModuleWithProviders, Type } from '@angular/core';
import { HomeComponent } from './common/portfolio/common/home/home.component';
import { AdministrationModule } from './common/administration/administration.module';
import { Routes, RouterModule } from '@angular/router';

export const routess: Routes = [
  { path: '', component: HomeComponent },
  {
    path: ROUTES_PATHS.Administration.base,
    loadChildren: 'app/common/administration/administration.module#AdministrationModule'
  },
];
export const appRouter: ModuleWithProviders = RouterModule.forRoot(routess, { useHash: true });
