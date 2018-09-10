import { Routes, RouterModule } from '@angular/router';
import { SuasachComponent } from './suasach.component';

const routes: Routes = [
  { path:'', component: SuasachComponent },
];

export const SuasachRoutes = RouterModule.forChild(routes);
