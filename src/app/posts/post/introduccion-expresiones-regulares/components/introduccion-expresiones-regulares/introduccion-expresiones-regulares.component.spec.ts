import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionExpresionesRegularesComponent } from './introduccion-expresiones-regulares.component';

describe('IntroduccionExpresionesRegularesComponent', () => {
  let component: IntroduccionExpresionesRegularesComponent;
  let fixture: ComponentFixture<IntroduccionExpresionesRegularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduccionExpresionesRegularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduccionExpresionesRegularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
