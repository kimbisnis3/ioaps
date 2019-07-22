import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataPage } from './biodata.page';

describe('BiodataPage', () => {
  let component: BiodataPage;
  let fixture: ComponentFixture<BiodataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiodataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiodataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
