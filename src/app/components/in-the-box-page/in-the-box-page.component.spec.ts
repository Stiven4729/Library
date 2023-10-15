import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheBoxPageComponent } from './in-the-box-page.component';

describe('InTheBoxPageComponent', () => {
  let component: InTheBoxPageComponent;
  let fixture: ComponentFixture<InTheBoxPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InTheBoxPageComponent]
    });
    fixture = TestBed.createComponent(InTheBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
