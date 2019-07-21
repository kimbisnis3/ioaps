import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListxPage } from './listx.page';

describe('ListxPage', () => {
  let component: ListxPage;
  let fixture: ComponentFixture<ListxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
