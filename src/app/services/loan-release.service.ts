import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanReleaseService {
  private apiUrl = apiUrl;
  loanReleaseEvent = new Subject();
  constructor(private http: HttpClient) { }

  fetch(queryParams) {
    const url = `${this.apiUrl}loan-releases`;
    return this.http.get(url, { params: queryParams });
  }

  onLoanRelease(queryParams) {
    return this.loanReleaseEvent.next(queryParams);
  }


}
