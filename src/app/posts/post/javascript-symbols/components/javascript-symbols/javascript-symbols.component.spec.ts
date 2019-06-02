import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptSymbolsComponent } from './javascript-symbols.component';

describe('JavascriptSymbolsComponent', () => {
  let component: JavascriptSymbolsComponent;
  let fixture: ComponentFixture<JavascriptSymbolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptSymbolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
