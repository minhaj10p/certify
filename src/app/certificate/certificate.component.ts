import { Component, OnInit } from '@angular/core';
import { CertificateService } from './certificate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  certService: CertificateService
  certificateDetails: any;
  constructor(cs: CertificateService, private route: ActivatedRoute) {
    this.certService = cs;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const deviceID = params.get("deviceId");
      this.certService.getCertificate(deviceID).subscribe(data => {
        console.log("data???", data);
        this.certificateDetails = data;
      }, err => {
        console.log("errorr??", err)
      })
    })

  }

}
