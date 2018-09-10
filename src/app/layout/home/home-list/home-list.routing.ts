import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './home-list.component';

const routes: Routes = [
  { path:'',component:HomeListComponent, },
];

export const HomeListRoutes = RouterModule.forChild(routes);
