import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeachreComponent } from './add-teachre.component';

describe('AddTeachreComponent', () => {
  let component: AddTeachreComponent;
  let fixture: ComponentFixture<AddTeachreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeachreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeachreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
