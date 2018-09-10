import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuaTacgiaComponent } from './sua-tacgia.component';
import { SuaTacgiaRoutes } from './sua-tacgia.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SuaTacgiaRoutes,
    ReactiveFormsModule
  ],
  declarations: [SuaTacgiaComponent]
})
export class SuaTacgiaModule { }
