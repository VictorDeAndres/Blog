import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidorPushNotificationsComponent } from './servidor-push-notifications.component';

describe('ServidorPushNotificationsComponent', () => {
  let component: ServidorPushNotificationsComponent;
  let fixture: ComponentFixture<ServidorPushNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServidorPushNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServidorPushNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
