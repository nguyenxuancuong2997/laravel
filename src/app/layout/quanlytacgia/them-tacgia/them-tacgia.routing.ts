import { Routes, RouterModule } from '@angular/router';
import { ThemTacgiaComponent } from './them-tacgia.component';

const routes: Routes = [
  { path:'',component:ThemTacgiaComponent},
];

export const ThemTacgiaRoutes = RouterModule.forChild(routes);
