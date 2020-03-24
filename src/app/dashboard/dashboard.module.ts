import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    MatInputModule,
    CommonModule
  ]
})
export class DashboardModule { }
