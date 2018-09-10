import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete.component';
import { DeleteRoutes } from './delete.routing';

@NgModule({
  imports: [
    CommonModule,
    DeleteRoutes
  ],
  declarations: [DeleteComponent]
})
export class DeleteModule { }
