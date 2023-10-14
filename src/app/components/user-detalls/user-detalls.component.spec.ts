import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetallsComponent } from './user-detalls.component';

describe('UserDetallsComponent', () => {
  let component: UserDetallsComponent;
  let fixture: ComponentFixture<UserDetallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetallsComponent]
    });
    fixture = TestBed.createComponent(UserDetallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
