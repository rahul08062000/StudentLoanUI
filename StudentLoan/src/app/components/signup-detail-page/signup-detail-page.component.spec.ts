import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDetailPageComponent } from './signup-detail-page.component';

describe('SignupDetailPageComponent', () => {
  let component: SignupDetailPageComponent;
  let fixture: ComponentFixture<SignupDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
