import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CertificateComponent } from './certificate.component';
import { MatInputModule } from '@angular/material/input';
import { CertificateService } from './certificate.service';


@NgModule({
  declarations: [CertificateComponent],
  imports: [
    MatInputModule,
    CommonModule,
    SharedModule
  ],
  providers: [CertificateService]
})
export class CertificateModule { }
