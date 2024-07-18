import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransactionsComponent } from './customer-transactions.component';

describe('CustomerTransactionsComponent', () => {
  let component: CustomerTransactionsComponent;
  let fixture: ComponentFixture<CustomerTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerTransactionsComponent]
    });
    fixture = TestBed.createComponent(CustomerTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
