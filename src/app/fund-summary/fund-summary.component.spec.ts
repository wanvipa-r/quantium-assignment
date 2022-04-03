import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundSummaryComponent } from './fund-summary.component';

describe('FundSummaryComponent', () => {
  let component: FundSummaryComponent;
  let fixture: ComponentFixture<FundSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
