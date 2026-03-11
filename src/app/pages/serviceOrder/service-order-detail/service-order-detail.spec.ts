import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderDetail } from './service-order-detail';

describe('ServiceOrderDetail', () => {
  let component: ServiceOrderDetail;
  let fixture: ComponentFixture<ServiceOrderDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceOrderDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceOrderDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
