import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-loan-release',
  templateUrl: './loan-release.component.html',
  styleUrls: ['./loan-release.component.scss']
})
export class LoanReleaseComponent implements OnInit {
  isLoading = false;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  generate() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.snackBar.open('Report has been exported successfully.', 'Ok', {
        duration: 5000
      });
    }, 3000);
  }

}
