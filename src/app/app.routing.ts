import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule' },
  { path: 'dang-ky', loadChildren: './auth/sign-up/sign-up.module#SignUpModule' },
  { path: 'dang-nhap', loadChildren: './auth/login/login.module#LoginModule' },


];

export const AppRoutes = RouterModule.forRoot(routes);
