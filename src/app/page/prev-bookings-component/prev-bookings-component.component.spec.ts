import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevBookingsComponentComponent } from './prev-bookings-component.component';

describe('PrevBookingsComponentComponent', () => {
  let component: PrevBookingsComponentComponent;
  let fixture: ComponentFixture<PrevBookingsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevBookingsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevBookingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
