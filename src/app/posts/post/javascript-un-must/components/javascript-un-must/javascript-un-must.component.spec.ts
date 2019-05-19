import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptUnMustComponent } from './javascript-un-must.component';

describe('JavascriptUnMustComponent', () => {
  let component: JavascriptUnMustComponent;
  let fixture: ComponentFixture<JavascriptUnMustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptUnMustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptUnMustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
