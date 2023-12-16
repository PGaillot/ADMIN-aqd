import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRequestListComponent } from './house-request-list.component';

describe('houseRequestListComponent', () => {
  let component: HouseRequestListComponent;
  let fixture: ComponentFixture<HouseRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
