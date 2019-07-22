import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataAddPage } from './biodata-add.page';

describe('BiodataAddPage', () => {
  let component: BiodataAddPage;
  let fixture: ComponentFixture<BiodataAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiodataAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiodataAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
