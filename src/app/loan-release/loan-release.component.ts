import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { LoanReleaseService } from '../services/loan-release.service';
import { Subscription } from 'rxjs';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-loan-release',
  templateUrl: './loan-release.component.html',
  styleUrls: ['./loan-release.component.scss']
})
export class LoanReleaseComponent implements OnInit, OnDestroy {
  isLoading = false;
  loanServiceSubscription: Subscription;
  constructor(private snackBar: MatSnackBar, private loanReleaseService: LoanReleaseService, private csvParser: Papa) { }

  ngOnInit() {
  }

  generate() {
    this.isLoading = true;

    this.loanServiceSubscription = this.loanReleaseService.fetch().subscribe(
      (res: any) => {
        this.downloadData(res.data);
      }
    );
    setTimeout(() => {
      this.isLoading = false;
      this.snackBar.open('Report has been exported successfully.', 'Ok', {
        duration: 5000
      });
    }, 3000);
  }

  downloadData(data) {
    const csvReport = this.csvParser.unparse(data);
    const blob = new Blob([csvReport], { type: 'text/csv;charset=utf-8' });
  }

  ngOnDestroy() {
    // tslint:disable-next-line:triple-equals
    if (this.loanServiceSubscription != undefined) {
      this.loanServiceSubscription.unsubscribe();
    }
  }

}
