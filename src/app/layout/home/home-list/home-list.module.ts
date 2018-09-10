import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list.component';
import { HomeListRoutes } from './home-list.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeListRoutes,
    ReactiveFormsModule
  ],
  declarations: [HomeListComponent]
})
export class HomeListModule { }
