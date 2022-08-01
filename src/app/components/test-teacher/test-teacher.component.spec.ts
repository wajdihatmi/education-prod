import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTeacherComponent } from './test-teacher.component';

describe('TestTeacherComponent', () => {
  let component: TestTeacherComponent;
  let fixture: ComponentFixture<TestTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
