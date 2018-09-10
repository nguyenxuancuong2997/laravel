import { Routes, RouterModule } from '@angular/router';
import { ListNhacungcapComponent } from './list-nhacungcap.component';

const routes: Routes = [
  { path:'',component:ListNhacungcapComponent},
];

export const ListNhacungcapRoutes = RouterModule.forChild(routes);
