import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPushNotificationsComponent } from './angular-push-notifications.component';

describe('AngularPushNotificationsComponent', () => {
  let component: AngularPushNotificationsComponent;
  let fixture: ComponentFixture<AngularPushNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPushNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPushNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
