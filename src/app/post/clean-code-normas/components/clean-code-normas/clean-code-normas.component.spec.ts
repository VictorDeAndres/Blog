import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanCodeNormasComponent } from './clean-code-normas.component';

describe('CleanCodeNormasComponent', () => {
  let component: CleanCodeNormasComponent;
  let fixture: ComponentFixture<CleanCodeNormasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanCodeNormasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanCodeNormasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
