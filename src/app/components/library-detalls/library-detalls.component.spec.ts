import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDetallsComponent } from './library-detalls.component';

describe('LibraryDetallsComponent', () => {
  let component: LibraryDetallsComponent;
  let fixture: ComponentFixture<LibraryDetallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryDetallsComponent]
    });
    fixture = TestBed.createComponent(LibraryDetallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
