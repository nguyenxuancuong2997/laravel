import { Routes, RouterModule } from '@angular/router';
import { ListTacgiaComponent } from './list-tacgia.component';

const routes: Routes = [
  { path:'',component:ListTacgiaComponent },
];

export const ListTacgiaRoutes = RouterModule.forChild(routes);
