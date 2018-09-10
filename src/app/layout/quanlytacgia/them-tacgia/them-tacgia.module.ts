import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemTacgiaComponent } from './them-tacgia.component';
import { ThemTacgiaRoutes } from './them-tacgia.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemTacgiaRoutes,
    ReactiveFormsModule
  ],
  declarations: [ThemTacgiaComponent]
})
export class ThemTacgiaModule { }
