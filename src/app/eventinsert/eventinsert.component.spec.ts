import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventinsertComponent } from './eventinsert.component';

describe('EventinsertComponent', () => {
  let component: EventinsertComponent;
  let fixture: ComponentFixture<EventinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventinsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
