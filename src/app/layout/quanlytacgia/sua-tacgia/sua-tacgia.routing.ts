import { Routes, RouterModule } from '@angular/router';
import { SuaTacgiaComponent } from './sua-tacgia.component';

const routes: Routes = [
  { path:'',component:SuaTacgiaComponent },
];

export const SuaTacgiaRoutes = RouterModule.forChild(routes);
