import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanReleaseModalComponent } from './loan-release-modal.component';

describe('LoanReleaseModalComponent', () => {
  let component: LoanReleaseModalComponent;
  let fixture: ComponentFixture<LoanReleaseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanReleaseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanReleaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
