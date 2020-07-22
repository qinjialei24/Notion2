import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuNavigatorComponent } from './bu-navigator.component';

describe('BuNavigatorComponent', () => {
  let component: BuNavigatorComponent;
  let fixture: ComponentFixture<BuNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
