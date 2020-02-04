import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTreeComponent } from './tab-tree.component';

describe('TabTreeComponent', () => {
  let component: TabTreeComponent;
  let fixture: ComponentFixture<TabTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
