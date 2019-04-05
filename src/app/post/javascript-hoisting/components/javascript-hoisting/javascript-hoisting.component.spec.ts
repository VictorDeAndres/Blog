import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptHoistingComponent } from './javascript-hoisting.component';

describe('JavascriptHoistingComponent', () => {
  let component: JavascriptHoistingComponent;
  let fixture: ComponentFixture<JavascriptHoistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptHoistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptHoistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
