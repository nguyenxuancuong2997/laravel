import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuaNhacungcapComponent } from './sua-nhacungcap.component';
import { SuaNhacungcapRoutes } from './sua-nhacungcap.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SuaNhacungcapRoutes,
    ReactiveFormsModule
  ],
  declarations: [SuaNhacungcapComponent]
})
export class SuaNhacungcapModule { }
