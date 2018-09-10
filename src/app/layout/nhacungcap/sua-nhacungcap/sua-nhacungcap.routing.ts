import { Routes, RouterModule } from '@angular/router';
import { SuaNhacungcapComponent } from './sua-nhacungcap.component';

const routes: Routes = [
  { path:'',component:SuaNhacungcapComponent  },
];

export const SuaNhacungcapRoutes = RouterModule.forChild(routes);
