import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanReleaseService {
  private apiUrl = apiUrl;
  constructor(private http: HttpClient) { }

  fetch() {
    const url = `${this.apiUrl}loan-releases`;
    return this.http.get(url);
  }
}
