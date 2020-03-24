import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import {MatInputModule} from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    MatInputModule,
    CommonModule,
    SharedModule,
  ]
})
export class DashboardModule { }
