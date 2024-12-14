import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBreadCrumbComponent } from './nav-bread-crumb.component';

describe('NavBreadCrumbComponent', () => {
  let component: NavBreadCrumbComponent;
  let fixture: ComponentFixture<NavBreadCrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBreadCrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBreadCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
