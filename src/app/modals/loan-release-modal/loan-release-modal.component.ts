import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanReleaseService } from 'src/app/services/loan-release.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-loan-release-modal',
  templateUrl: './loan-release-modal.component.html',
  styleUrls: ['./loan-release-modal.component.scss']
})
export class LoanReleaseModalComponent implements OnInit {
  form: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private loanReleaseService: LoanReleaseService, private dialogRef: MatDialogRef<LoanReleaseModalComponent>) { }

  ngOnInit() {
    this.form = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  formSubmit(form) {
    if (!form.valid) {
      return false;
    }

    const params = {
      startDate: form.value.startDate,
      endDate: form.value.endDate
    };
    this.loanReleaseService.onLoanRelease(params);
    this.dialogRef.close();


  }

}
