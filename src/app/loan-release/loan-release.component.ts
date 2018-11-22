import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { LoanReleaseService } from '../services/loan-release.service';
import { Subscription } from 'rxjs';
import { Papa } from 'ngx-papaparse';
import * as FileSaver from 'file-saver';
import { formatDate } from '@angular/common';
import { LoanReleaseModalComponent } from '../modals/loan-release-modal/loan-release-modal.component';

@Component({
  selector: 'app-loan-release',
  templateUrl: './loan-release.component.html',
  styleUrls: ['./loan-release.component.scss']
})
export class LoanReleaseComponent implements OnInit, OnDestroy {
  isLoading = false;
  loanServiceSubscription: Subscription;
  // tslint:disable-next-line:max-line-length
  constructor(private snackBar: MatSnackBar, private loanReleaseService: LoanReleaseService, private csvParser: Papa, private dialog: MatDialog) { }

  ngOnInit() {
    this.loanReleaseService.loanReleaseEvent.subscribe(
      (response: any) => {
        const queryParams = {
          startDate: formatDate(response.startDate, 'LLddyyyy', 'en'),
          endDate: formatDate(response.endDate, 'LLddyyyy', 'en')
        };

        const friendlyDates = {
          startDate: formatDate(response.startDate, 'mediumDate', 'en'),
          endDate: formatDate(response.endDate, 'mediumDate', 'en')
        };
        const fileName = `Crecom Release ${friendlyDates.startDate} - ${friendlyDates.endDate}`;
        this.generate(queryParams, fileName);

      }
    );
  }

  openModal() {
    this.dialog.open(LoanReleaseModalComponent);
  }

  generate(queryParams, fileName) {
    this.isLoading = true;

    this.loanServiceSubscription = this.loanReleaseService.fetch(queryParams).subscribe(
      (res: any) => {
        this.downloadData(res.data, fileName);
        this.isLoading = false;
        this.snackBar.open('Report has been exported successfully.', 'Ok', {
          duration: 5000
        });
      },
      (err) => {
        this.isLoading = false;
        this.snackBar.open('Failed to export report! Please try again.', 'Ok', {
          duration: 5000
        });
      }
    );
  }

  downloadData(data, filename) {
    const csvReport = this.csvParser.unparse(data);
    const blob = new Blob([csvReport], { type: 'text/csv;charset=utf-8' });
    const date = formatDate(Date.now(), 'E, MMM dd, yyyy hh:mm a', 'en');
    const fileSaver = FileSaver;
    fileSaver.saveAs(blob, `${filename}.csv`);
  }

  ngOnDestroy() {
    // tslint:disable-next-line:triple-equals
    if (this.loanServiceSubscription != undefined) {
      this.loanServiceSubscription.unsubscribe();
    }
  }

}
