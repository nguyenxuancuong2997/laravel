import { Routes, RouterModule } from '@angular/router';
import { ThemsachComponent } from './themsach.component';

const routes: Routes = [
  { 
    path:'',component:ThemsachComponent 
   },
];

export const ThemsachRoutes = RouterModule.forChild(routes);
