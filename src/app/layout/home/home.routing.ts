import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path:'', component: HomeComponent,children:[
    {path:'',loadChildren:'./home-list/home-list.module#HomeListModule'},
    {path:'themsach',loadChildren:'./themsach/themsach.module#ThemsachModule'},
    {path:'suasach',loadChildren:'./suasach/suasach.module#SuasachModule'},
    {path:'delete',loadChildren:'./delete/delete.module#DeleteModule'}
  ], },
];

export const HomeRoutes = RouterModule.forChild(routes);

