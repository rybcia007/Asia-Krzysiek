import { Routes, RouterModule } from '@angular/router';
import { ROUTES_PATHS } from './portfolio.path';
import { HomeComponent } from './common/home/home.component';
import { AboutComponent } from './common/about/about.component';
import { WeddingComponent } from './common/wedding/wedding.component';
import { PartyComponent } from './common/party/party.component';
import { HoneymoonComponent } from './common/honeymoon/honeymoon.component';
import { RelationshipComponent } from './common/relationship/relationship.component';
import { ContactComponent } from './common/contact/contact.component';

const routes: Routes = [
    { path: ROUTES_PATHS.Home, component: HomeComponent },
    { path: ROUTES_PATHS.About, component: AboutComponent },
    { path: ROUTES_PATHS.Wedding, component: WeddingComponent },
    { path: ROUTES_PATHS.Party, component: PartyComponent },
    { path: ROUTES_PATHS.Honeymoon, component: HoneymoonComponent },
    { path: ROUTES_PATHS.Relationship, component: RelationshipComponent },
    { path: ROUTES_PATHS.Contact, component: ContactComponent },
];

export const Router_module = RouterModule.forChild(routes);
