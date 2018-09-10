import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemNhacungcapComponent } from './them-nhacungcap.component';
import { NhacungcapRoutes } from '../nhacungcap.routing';
import { ThemNhacungcapRoutes } from './them-nhacungcap.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemNhacungcapRoutes,
    ReactiveFormsModule
  ],
  declarations: [ThemNhacungcapComponent]
})
export class ThemNhacungcapModule { }
