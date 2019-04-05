import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWebcomponentComponent } from './angular-webcomponent.component';

describe('AngularWebcomponentComponent', () => {
  let component: AngularWebcomponentComponent;
  let fixture: ComponentFixture<AngularWebcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWebcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWebcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
