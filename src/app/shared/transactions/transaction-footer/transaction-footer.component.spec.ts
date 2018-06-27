import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFooterComponent } from './transaction-footer.component';

describe('TransactionFooterComponent', () => {
  let component: TransactionFooterComponent;
  let fixture: ComponentFixture<TransactionFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
