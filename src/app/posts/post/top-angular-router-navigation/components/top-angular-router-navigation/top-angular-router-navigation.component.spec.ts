import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAngularRouterNavigationComponent } from './top-angular-router-navigation.component';

describe('TopAngularRouterNavigationComponent', () => {
  let component: TopAngularRouterNavigationComponent;
  let fixture: ComponentFixture<TopAngularRouterNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAngularRouterNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAngularRouterNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
