import { Routes, RouterModule } from '@angular/router';
import { QuanlytacgiaComponent } from './quanlytacgia.component';

const routes: Routes = [
  { path:'', component: QuanlytacgiaComponent,children:[
    {path:'',loadChildren:'./list-tacgia/list-tacgia.module#ListTacgiaModule'},
    {path:'themtacgia',loadChildren:'./them-tacgia/them-tacgia.module#ThemTacgiaModule'},
    {path:'suatacgia',loadChildren:'./sua-tacgia/sua-tacgia.module#SuaTacgiaModule'}
  
  ], },
];

export const QuanlytacgiaRoutes = RouterModule.forChild(routes);
