import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesSvelteComponent } from './routes-svelte.component';

describe('RoutesSvelteComponent', () => {
  let component: RoutesSvelteComponent;
  let fixture: ComponentFixture<RoutesSvelteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesSvelteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesSvelteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
