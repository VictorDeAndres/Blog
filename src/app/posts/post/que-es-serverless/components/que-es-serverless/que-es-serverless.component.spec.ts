import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsServerlessComponent } from './que-es-serverless.component';

describe('QueEsServerlessComponent', () => {
  let component: QueEsServerlessComponent;
  let fixture: ComponentFixture<QueEsServerlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueEsServerlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueEsServerlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
