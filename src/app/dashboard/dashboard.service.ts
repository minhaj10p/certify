import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root', })
export class CertService {


    constructor(private http: HttpClient) { }

    createCertificate(cert) {
        return this.http.post(`${environment.apiUrlV1}certificates`, cert)
    }

}