import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaNavigatorComponent } from './ba-navigator.component';

describe('BaNavigatorComponent', () => {
  let component: BaNavigatorComponent;
  let fixture: ComponentFixture<BaNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
