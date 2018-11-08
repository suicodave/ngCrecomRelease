import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanReleaseComponent } from './loan-release.component';

describe('LoanReleaseComponent', () => {
  let component: LoanReleaseComponent;
  let fixture: ComponentFixture<LoanReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
