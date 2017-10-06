import { DashboardComponent } from './common/dashboard/dashboard.component';
import { AuthorizationComponent } from './common/user/authorization/authorization.component';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES_PATHS } from './administration.path';

const routes: Routes = [
    { path: ROUTES_PATHS.login, component: AuthorizationComponent },
    { path: ROUTES_PATHS.dashboard, component: DashboardComponent },
];

export const Router_module = RouterModule.forChild(routes);