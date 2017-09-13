import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDropdownlistComponent } from './staff-dropdownlist.component';

describe('StaffDropdownlistComponent', () => {
  let component: StaffDropdownlistComponent;
  let fixture: ComponentFixture<StaffDropdownlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffDropdownlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDropdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
