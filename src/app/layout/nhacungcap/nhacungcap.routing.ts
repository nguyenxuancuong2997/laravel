import { Routes, RouterModule } from '@angular/router';
import { NhacungcapComponent } from './nhacungcap.component';

const routes: Routes = [
  { path:'',component:NhacungcapComponent,children:[
      {path:'',loadChildren:'./list-nhacungcap/list-nhacungcap.module#ListNhacungcapModule'},
      {path:'themnhacungcap',loadChildren:'./them-nhacungcap/them-nhacungcap.module#ThemNhacungcapModule'},
      {path:'suanhacungcap',loadChildren:'./sua-nhacungcap/sua-nhacungcap.module#SuaNhacungcapModule'}

    ],},
];

export const NhacungcapRoutes = RouterModule.forChild(routes);
