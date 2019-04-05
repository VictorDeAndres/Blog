import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPublishInfoComponent } from './post-publish-info.component';

describe('PostPublishInfoComponent', () => {
  let component: PostPublishInfoComponent;
  let fixture: ComponentFixture<PostPublishInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPublishInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPublishInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
