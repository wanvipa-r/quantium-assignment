import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundPerformanceComponent } from './fund-performance.component';

describe('FundPerformanceComponent', () => {
  let component: FundPerformanceComponent;
  let fixture: ComponentFixture<FundPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
