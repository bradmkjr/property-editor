import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsModule } from './materials/materials.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  declarations: []
})
export class SharedModule { }
