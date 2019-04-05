import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanciaTestUnitariosComponent } from './importancia-test-unitarios.component';

describe('ImportanciaTestUnitariosComponent', () => {
  let component: ImportanciaTestUnitariosComponent;
  let fixture: ComponentFixture<ImportanciaTestUnitariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportanciaTestUnitariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanciaTestUnitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
