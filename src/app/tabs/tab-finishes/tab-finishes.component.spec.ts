import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFinishesComponent } from './tab-finishes.component';

describe('TabFinishesComponent', () => {
  let component: TabFinishesComponent;
  let fixture: ComponentFixture<TabFinishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFinishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFinishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
