import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanReleaseComponent } from './loan-release/loan-release.component';

const routes: Routes = [
  {
    path: '', redirectTo: '', pathMatch: 'full', children: [
      { path: '', component: LoanReleaseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
