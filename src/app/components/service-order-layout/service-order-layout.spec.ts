import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderLayout } from './service-order-layout';

describe('ServiceOrderLayout', () => {
  let component: ServiceOrderLayout;
  let fixture: ComponentFixture<ServiceOrderLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceOrderLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceOrderLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
