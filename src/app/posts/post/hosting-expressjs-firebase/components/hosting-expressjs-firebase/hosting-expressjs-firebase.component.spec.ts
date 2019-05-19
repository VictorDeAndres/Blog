import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingExpressjsFirebaseComponent } from './hosting-expressjs-firebase.component';

describe('HostingExpressjsFirebaseComponent', () => {
  let component: HostingExpressjsFirebaseComponent;
  let fixture: ComponentFixture<HostingExpressjsFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingExpressjsFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingExpressjsFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
