import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTacgiaComponent } from './list-tacgia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListTacgiaRoutes } from './list-tacgia.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListTacgiaRoutes
  ],
  declarations: [ListTacgiaComponent]
})
export class ListTacgiaModule { }
