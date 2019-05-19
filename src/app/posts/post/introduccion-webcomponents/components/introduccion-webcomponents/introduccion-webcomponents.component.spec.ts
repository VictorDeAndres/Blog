import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionWebcomponentsComponent } from './introduccion-webcomponents.component';

describe('IntroduccionWebcomponentsComponent', () => {
  let component: IntroduccionWebcomponentsComponent;
  let fixture: ComponentFixture<IntroduccionWebcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduccionWebcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduccionWebcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
