import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayVsSetComponent } from './array-vs-set.component';

describe('ArrayVsSetComponent', () => {
  let component: ArrayVsSetComponent;
  let fixture: ComponentFixture<ArrayVsSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayVsSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayVsSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
