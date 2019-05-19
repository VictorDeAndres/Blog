import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPackEnTusProyectosAngularComponent } from './web-pack-en-tus-proyectos-angular.component';

describe('WebPackEnTusProyectosAngularComponent', () => {
  let component: WebPackEnTusProyectosAngularComponent;
  let fixture: ComponentFixture<WebPackEnTusProyectosAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPackEnTusProyectosAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPackEnTusProyectosAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
