import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitDesdeLineaComandosComponent } from './git-desde-linea-comandos.component';

describe('GitDesdeLineaComandosComponent', () => {
  let component: GitDesdeLineaComandosComponent;
  let fixture: ComponentFixture<GitDesdeLineaComandosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitDesdeLineaComandosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitDesdeLineaComandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
