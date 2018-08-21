import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPageComponentComponent } from './book-page-component.component';

describe('BookPageComponentComponent', () => {
  let component: BookPageComponentComponent;
  let fixture: ComponentFixture<BookPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
