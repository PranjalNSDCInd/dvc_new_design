import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingLicenceVerificationComponent } from './driving-licence-verification.component';

describe('DrivingLicenceVerificationComponent', () => {
  let component: DrivingLicenceVerificationComponent;
  let fixture: ComponentFixture<DrivingLicenceVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingLicenceVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingLicenceVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
