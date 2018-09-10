import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../_shared/guard/auth.guard';

const routes: Routes = [
  {
      path:'', component:LayoutComponent, children:[
        { path:'', loadChildren:'./home/home.module#HomeModule'},
        {path:'quanlytacgia',loadChildren:'./quanlytacgia/quanlytacgia.module#QuanlytacgiaModule'},
        {path:'nhacungcap',loadChildren:'./nhacungcap/nhacungcap.module#NhacungcapModule'}

      ],
      canActivate : [AuthGuard]
  },
];

export const LayoutRoutes = RouterModule.forChild(routes);
