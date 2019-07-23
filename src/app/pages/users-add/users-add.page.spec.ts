import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAddPage } from './users-add.page';

describe('UsersAddPage', () => {
  let component: UsersAddPage;
  let fixture: ComponentFixture<UsersAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
