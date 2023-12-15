import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRequestListComponent } from './home-request-list.component';

describe('HomeRequestListComponent', () => {
  let component: HomeRequestListComponent;
  let fixture: ComponentFixture<HomeRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
