import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeComponent } from './aptitude.component';

describe('DashboardComponent', () => {
  let component: AptitudeComponent;
  let fixture: ComponentFixture<AptitudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptitudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
