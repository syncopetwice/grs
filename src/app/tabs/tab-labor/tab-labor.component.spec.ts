import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLaborComponent } from './tab-labor.component';

describe('TabLaborComponent', () => {
  let component: TabLaborComponent;
  let fixture: ComponentFixture<TabLaborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabLaborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
