import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRequestDetailsComponent } from './house-request-details.component';

describe('HouseRequestDetailsComponent', () => {
  let component: HouseRequestDetailsComponent;
  let fixture: ComponentFixture<HouseRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
