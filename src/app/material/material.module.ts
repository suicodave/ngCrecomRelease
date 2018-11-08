import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatSidenavModule, MatButtonModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
