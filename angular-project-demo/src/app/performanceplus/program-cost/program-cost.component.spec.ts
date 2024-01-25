import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCostComponent } from './program-cost.component';

describe('ProgramCostComponent', () => {
  let component: ProgramCostComponent;
  let fixture: ComponentFixture<ProgramCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramCostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
