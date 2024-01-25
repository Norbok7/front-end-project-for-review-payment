import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceplusComponent } from './performanceplus.component';

describe('PerformanceplusComponent', () => {
  let component: PerformanceplusComponent;
  let fixture: ComponentFixture<PerformanceplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceplusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformanceplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
