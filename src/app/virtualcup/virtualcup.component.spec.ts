import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualcupComponent } from './virtualcup.component';

describe('VirtualcupComponent', () => {
  let component: VirtualcupComponent;
  let fixture: ComponentFixture<VirtualcupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualcupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualcupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
