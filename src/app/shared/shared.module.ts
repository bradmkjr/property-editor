import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsModule } from './materials/materials.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
  ],
  declarations: [LoadingComponent]
})
export class SharedModule { }
