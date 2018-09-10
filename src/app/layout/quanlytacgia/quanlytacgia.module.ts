import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanlytacgiaComponent } from './quanlytacgia.component';
import { QuanlytacgiaRoutes } from './quanlytacgia.routing';

@NgModule({
  imports: [
    CommonModule,
    QuanlytacgiaRoutes
  ],
  declarations: [QuanlytacgiaComponent]
})
export class QuanlytacgiaModule { }
