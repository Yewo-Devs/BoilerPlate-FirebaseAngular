import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOnboardingComponent } from './profile-onboarding.component';

describe('ProfileOnboardingComponent', () => {
  let component: ProfileOnboardingComponent;
  let fixture: ComponentFixture<ProfileOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileOnboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
