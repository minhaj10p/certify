import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatDatepickerModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatNativeDateModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...modules,
    CommonModule,
  ],
  exports: [...modules]
})
export class SharedModule { }
