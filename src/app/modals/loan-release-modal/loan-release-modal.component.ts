import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-release-modal',
  templateUrl: './loan-release-modal.component.html',
  styleUrls: ['./loan-release-modal.component.scss']
})
export class LoanReleaseModalComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

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
  }

}
