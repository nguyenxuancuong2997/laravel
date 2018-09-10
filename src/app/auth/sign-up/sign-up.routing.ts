import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';

const routes: Routes = [
  { 
    path:'',component:SignUpComponent 
   },
];

export const SignUpRoutes = RouterModule.forChild(routes);
