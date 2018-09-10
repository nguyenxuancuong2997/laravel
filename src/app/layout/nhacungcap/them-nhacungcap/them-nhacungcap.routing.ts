import { Routes, RouterModule } from '@angular/router';
import { ThemNhacungcapComponent } from './them-nhacungcap.component';

const routes: Routes = [
  { path:'',component:ThemNhacungcapComponent },
];

export const ThemNhacungcapRoutes = RouterModule.forChild(routes);
