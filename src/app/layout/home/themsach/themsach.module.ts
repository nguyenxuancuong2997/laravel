import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemsachComponent } from './themsach.component';
import { ThemsachRoutes } from './themsach.routing';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ThemsachRoutes,
    ReactiveFormsModule
  ],
  declarations: [ThemsachComponent]
})
export class ThemsachModule { }
