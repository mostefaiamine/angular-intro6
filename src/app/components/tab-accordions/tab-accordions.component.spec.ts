import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAccordionsComponent } from './tab-accordions.component';

describe('TabAccordionsComponent', () => {
  let component: TabAccordionsComponent;
  let fixture: ComponentFixture<TabAccordionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAccordionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
