import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PancardVerificationComponent } from './pancard-verification.component';

describe('PancardVerificationComponent', () => {
  let component: PancardVerificationComponent;
  let fixture: ComponentFixture<PancardVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PancardVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PancardVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
