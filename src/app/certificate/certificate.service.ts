import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({providedIn:"root"})
export class CertificateService {

    constructor(private http: HttpClient) {}

    getCertificate(deviceID: string) {
        return this.http.get(`${environment.apiUrlV1}certificates?device_id=${deviceID}`)
    }
}