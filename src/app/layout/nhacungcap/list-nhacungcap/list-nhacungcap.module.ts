import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNhacungcapComponent } from './list-nhacungcap.component';
import { ListNhacungcapRoutes } from './list-nhacungcap.routing';

@NgModule({
  imports: [
    CommonModule,
    ListNhacungcapRoutes
  ],
  declarations: [ListNhacungcapComponent]
})
export class ListNhacungcapModule { }
