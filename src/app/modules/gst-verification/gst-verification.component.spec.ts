import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstVerificationComponent } from './gst-verification.component';

describe('GstVerificationComponent', () => {
  let component: GstVerificationComponent;
  let fixture: ComponentFixture<GstVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GstVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
