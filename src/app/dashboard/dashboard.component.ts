import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CertService } from './dashboard.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  minDate: Date
  certForm: FormGroup;
  certService: CertService
  initialState: any;

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate()

    this.minDate = new Date(currentYear, currentMonth, currentDay);
  }

  constructor(public dialog: MatDialog, fb: FormBuilder, certService: CertService, private _snackBar: MatSnackBar) {
    this.certService = certService;
    this.initialState = {
      device_id: ["", Validators.required],
      expiry: 1,
      valid_from: ["", Validators.required]
    }
    this.certForm = fb.group(this.initialState);
  }

  openSnackBar(message): void {
    this._snackBar.open(message);
  }

  onSubmit(cert): void {

    const payload = Object.assign({}, cert, { valid_from: new Date(cert.valid_from).toISOString() })
    this.certService.createCertificate(payload)
      .subscribe(
        data => {
          this.openSnackBar("certificate created successfully")
        },
        err => {
          console.log(err)
          if (err && err.error && err.error.message) {
            this.openSnackBar(err.error.message);
            return
          }
          this.openSnackBar("something went wrong.")
        })

  }


}

