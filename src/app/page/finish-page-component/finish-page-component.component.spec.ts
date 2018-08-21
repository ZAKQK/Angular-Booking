import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishPageComponentComponent } from './finish-page-component.component';

describe('FinishPageComponentComponent', () => {
  let component: FinishPageComponentComponent;
  let fixture: ComponentFixture<FinishPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
