import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFrontendsComponent } from './micro-frontends.component';

describe('MicroFrontendsComponent', () => {
  let component: MicroFrontendsComponent;
  let fixture: ComponentFixture<MicroFrontendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroFrontendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroFrontendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
