import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './delete.component';

const routes: Routes = [
  { path:'', component: DeleteComponent },
];

export const DeleteRoutes = RouterModule.forChild(routes);
