import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { CertService } from './dashboard.service';

import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    MatInputModule,
    CommonModule,
    SharedModule,
  ],
  providers: [CertService]
})
export class DashboardModule { }
