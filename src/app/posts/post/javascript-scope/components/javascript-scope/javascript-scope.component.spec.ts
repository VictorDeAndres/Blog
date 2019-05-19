import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptScopeComponent } from './javascript-scope.component';

describe('JavascriptScopeComponent', () => {
  let component: JavascriptScopeComponent;
  let fixture: ComponentFixture<JavascriptScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
