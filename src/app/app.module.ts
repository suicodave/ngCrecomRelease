import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoanReleaseComponent } from './loan-release/loan-release.component';
import { PapaParseModule } from 'ngx-papaparse';
import { HttpClientModule } from '@angular/common/http';
import { LoanReleaseModalComponent } from './modals/loan-release-modal/loan-release-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoanReleaseComponent,
    LoanReleaseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PapaParseModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoanReleaseModalComponent]
})
export class AppModule { }
