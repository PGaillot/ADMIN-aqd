import { ComponentFixture, TestBed } from '@angular/core/testing';

import { houseComponent } from './house.component';

describe('houseComponent', () => {
  let component: houseComponent;
  let fixture: ComponentFixture<houseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ houseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(houseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
