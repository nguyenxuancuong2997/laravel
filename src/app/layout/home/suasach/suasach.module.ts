import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuasachComponent } from './suasach.component';
import { SuasachRoutes } from './suasach.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    SuasachRoutes,
    ReactiveFormsModule
  ],
  declarations: [SuasachComponent]
})
export class SuasachModule { }
