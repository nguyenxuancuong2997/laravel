import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NhacungcapComponent } from './nhacungcap.component';
import { NhacungcapRoutes } from './nhacungcap.routing';

@NgModule({
  imports: [
    CommonModule,
    NhacungcapRoutes
  ],
  declarations: [NhacungcapComponent]
})
export class NhacungcapModule { }
