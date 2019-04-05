import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Es6BuclesAsincronosComponent } from './es6-bucles-asincronos.component';

describe('Es6BuclesAsincronosComponent', () => {
  let component: Es6BuclesAsincronosComponent;
  let fixture: ComponentFixture<Es6BuclesAsincronosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es6BuclesAsincronosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es6BuclesAsincronosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
